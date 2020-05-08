#!/usr/bin/env bash

app=$(whoami)-demo-nginx-angular

cf push $app \
    -m 64M \
    -k 256M \
    --docker-image quay.io/mechevarria/$app \
    --no-start

cf se $app MAPBOX_TOKEN $MAPBOX_TOKEN
cf se $app KEYCLOAK_URL $KEYCLOAK_URL
cf se $app KEYCLOAK false

cf start $app
