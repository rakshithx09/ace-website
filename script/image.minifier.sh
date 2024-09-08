#! /bin/bash

in_dir=$1
out_dir=$2
images=$(ls "$in_dir" | tr " " "\n")

for image in $images; do
  ffmpeg -i "$in_dir""/$image" -vf scale=20:-1 "$out_dir""/$image"
done
