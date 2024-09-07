/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    email: string | null | undefined;
    name: string | null | undefined;
    role: string | null | undefined;
  }
}
