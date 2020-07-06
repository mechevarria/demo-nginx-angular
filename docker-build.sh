#!/usr/bin/env bash

# delete local development environment settings
envfile="./src/assets/js/env.js"

if [ -f $envfile ] ; then
    rm $envfile
fi

echo "Building to 'dist'"
npm run build

docker build -t quay.io/mechevarria/demo-nginx-angular .

docker push quay.io/mechevarria/demo-nginx-angular