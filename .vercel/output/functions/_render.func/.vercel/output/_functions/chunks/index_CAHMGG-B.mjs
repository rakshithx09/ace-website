import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { sql, relations } from 'drizzle-orm';
import { sqliteTable, integer, text, primaryKey } from 'drizzle-orm/sqlite-core';

const userTable = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  uid: text("uid").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  image: text("image"),
  year: integer("year", { mode: "number" }),
  password: text("password").default(sql`NULL`),
  role: text("role", { enum: ["CORE", "MEMBER", "ADMIN"] }).default("MEMBER").notNull(),
  joinedOn: text("joined_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
  photo: text("photo")
});
const eventTable = sqliteTable("event", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  image: text("image").notNull(),
  deadline: text("deadline"),
  fromDate: text("from_date").notNull(),
  toDate: text("to_date").notNull(),
  description: text("description").notNull(),
  venue: text("venue").notNull(),
  minTeamSize: integer("min_team_size", { mode: "number" }).default(1).notNull(),
  maxTeamSize: integer("max_team_size", { mode: "number" }).default(1).notNull(),
  maxTeams: integer("maxTeams", { mode: "number" }),
  state: text("state", { enum: ["DRAFT", "PUBLISHED", "LIVE", "COMPLETED"] }).default("DRAFT").notNull(),
  //enum
  category: text("category", {
    enum: ["WORKSHOP", "HACKATHON", "COMPETITION", "SPECIAL"]
  }).notNull(),
  //enum
  amount: integer("amount", { mode: "number" }).default(0).notNull(),
  // state            EventState @default (DRAFT)
  // isLegacy         Boolean @default (false)
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
const teamTable = sqliteTable("team", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  isConfirmed: integer("is_confirmed", { mode: "boolean" }).default(false).notNull(),
  hasAttended: integer("has_attended", { mode: "boolean" }).default(false).notNull(),
  eventId: integer("event_id").references(() => eventTable.id).notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
const userTeamTable = sqliteTable(
  "user_team",
  {
    userId: integer("user_id").references(() => userTable.id).notNull(),
    teamId: integer("team_id").references(() => teamTable.id).notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.teamId] })
    };
  }
);
const organiserTable = sqliteTable(
  "organiser",
  {
    eventId: integer("event_id").references(() => eventTable.id).notNull(),
    userId: integer("user_id").references(() => userTable.id).notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.eventId, table.userId] })
    };
  }
);
const winnerTable = sqliteTable(
  "winner",
  {
    type: text("type", {
      enum: ["WINNER", "RUNNER_UP", "SECOND_RUNNER_UP"]
    }).notNull(),
    eventId: integer("event_id").references(() => eventTable.id).notNull(),
    teamId: integer("user_id").references(() => teamTable.id).notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.eventId, table.teamId] })
    };
  }
);
const blogTable = sqliteTable("blog", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  image: text("image"),
  description: text("description").notNull(),
  content: text("content").notNull(),
  state: text("state", { enum: ["DRAFT", "PUBLISHED"] }).default("DRAFT").notNull(),
  authorId: integer("author_id").references(() => userTable.id).notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
const commentsTable = sqliteTable(
  "Comment",
  {
    userId: integer("user_id").references(() => userTable.id).notNull(),
    blogId: integer("blog_id").references(() => blogTable.id).notNull(),
    content: text("content").notNull(),
    updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.blogId] })
    };
  }
);
const viewTable = sqliteTable(
  "View",
  {
    userId: integer("user_id").references(() => userTable.id).notNull(),
    blogId: integer("blog_id").references(() => blogTable.id).notNull(),
    liked: integer("liked", { mode: "boolean" }).default(false)
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.blogId] })
    };
  }
);
const userTableRelations = relations(userTable, ({ many }) => ({
  teams: many(userTeamTable),
  blogs: many(blogTable),
  views: many(viewTable),
  comments: many(commentsTable),
  organiser: many(organiserTable)
}));
const eventTableRelations = relations(eventTable, ({ many }) => ({
  teams: many(teamTable),
  organiser: many(organiserTable),
  winner: many(winnerTable)
}));
const teamTableRelations = relations(teamTable, ({ many, one }) => ({
  event: one(eventTable, {
    fields: [teamTable.eventId],
    references: [eventTable.id]
  }),
  users: many(userTeamTable)
}));
const userTeamTableRelations = relations(userTeamTable, ({ one }) => ({
  user: one(userTable, {
    fields: [userTeamTable.userId],
    references: [userTable.id]
  }),
  team: one(teamTable, {
    fields: [userTeamTable.teamId],
    references: [teamTable.id]
  })
}));
const blogTableRelations = relations(blogTable, ({ one, many }) => ({
  author: one(userTable, {
    fields: [blogTable.authorId],
    // Foreign key field
    references: [userTable.id]
  }),
  comments: many(commentsTable),
  views: many(viewTable)
}));
const commentsTableRelations = relations(commentsTable, ({ one }) => ({
  blog: one(blogTable, {
    fields: [commentsTable.blogId],
    references: [blogTable.id]
  }),
  user: one(userTable, {
    fields: [commentsTable.userId],
    references: [userTable.id]
  })
}));
const viewTableRelations = relations(viewTable, ({ one }) => ({
  user: one(userTable, {
    fields: [viewTable.userId],
    references: [userTable.id]
  }),
  blog: one(blogTable, {
    fields: [viewTable.blogId],
    references: [blogTable.id]
  })
}));
const organiserTableRelations = relations(organiserTable, ({ one }) => ({
  user: one(userTable, {
    fields: [organiserTable.userId],
    references: [userTable.id]
  }),
  event: one(eventTable, {
    fields: [organiserTable.eventId],
    references: [eventTable.id]
  })
}));
const winnerTableRelations = relations(winnerTable, ({ one }) => ({
  team: one(teamTable, {
    fields: [winnerTable.teamId],
    references: [teamTable.id]
  }),
  event: one(eventTable, {
    fields: [winnerTable.eventId],
    references: [eventTable.id]
  })
}));

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  blogTable,
  blogTableRelations,
  commentsTable,
  commentsTableRelations,
  eventTable,
  eventTableRelations,
  organiserTable,
  organiserTableRelations,
  teamTable,
  teamTableRelations,
  userTable,
  userTableRelations,
  userTeamTable,
  userTeamTableRelations,
  viewTable,
  viewTableRelations,
  winnerTable,
  winnerTableRelations
}, Symbol.toStringTag, { value: 'Module' }));

const client = createClient({
  url: "file:local.db",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjU0NTAzMzksImlhdCI6MTcyNDg0NTUzOSwicCI6eyJydyI6eyJucyI6WyJjMzE0MzNhNC02MzU4LTQ1NDQtYjdiYi01OTQ3N2E1MzMzNTMiXX19fQ.FLto9bc10zGUV1i6u0HkTahvkYDrs-M3BvXuFl_ZDDdPkZky1i9WPD61qljeZCCYB4z6IjitdzvcbvqYeYj6BQ"
});
const db = drizzle(client, { schema });

export { blogTable as b, commentsTable as c, db as d, userTable as u, viewTable as v };
