#!/usr/bin/env bash

docker run \
    -p 80:80 \
    --env MAPBOX_TOKEN=$MAPBOX_TOKEN \
    --env KEYCLOAK=$KEYCLOAK \
    --env KEYCLOAK_URL=$KEYCLOAK_URL \
    quay.io/mechevarria/demo-nginx-angular