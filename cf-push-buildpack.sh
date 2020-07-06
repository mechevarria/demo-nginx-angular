#!/usr/bin/env bash

# delete local development environment settings
envfile="./src/assets/js/env.js"

if [ -f $envfile ] ; then
    rm $envfile
fi

echo "Building to 'dist'"
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
