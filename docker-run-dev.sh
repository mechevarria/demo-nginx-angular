#!/usr/bin/env bash

docker run \
  -p 80:80 \
  --env MAPBOX_TOKEN=$MAPBOX_TOKEN \
  --env KEYCLOAK=$KEYCLOAK \
  --mount type=bind,source=${PWD}/dist,target=/usr/share/nginx/html \
  quay.io/mechevarria/nginx-angular
