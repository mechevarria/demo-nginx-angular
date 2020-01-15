#!/usr/bin/env bash

docker run \
  -p 80:80 \
  --mount type=bind,source=${PWD}/dist,target=/usr/share/nginx/html \
  quay.io/mechevarria/frontend-angular
