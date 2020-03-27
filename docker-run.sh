#!/usr/bin/env bash

docker run \
    -p 80:80 \
    --env MAPBOX_TOKEN=$MAPBOX_TOKEN \
    --env KEYCLOAK=$KEYCLOAK \
    quay.io/mechevarria/nginx-angular