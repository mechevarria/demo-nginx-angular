#!/usr/bin/env bash

echo "Building assets local"
npm run build

app=demo-nginx-angular

cf push $app \
    -m 64M \
    -k 1024M \
    -b https://github.com/cloudfoundry/nginx-buildpack.git \
    -c '$HOME/cf-custom-command.sh' \
    --no-start

cf se $app MAPBOX_TOKEN $MAPBOX_TOKEN
cf se $app KEYCLOAK_URL $KEYCLOAK_URL
cf se $app KEYCLOAK false

cf start $app
