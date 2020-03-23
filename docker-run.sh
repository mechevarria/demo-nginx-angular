#!/usr/bin/env bash

docker run \
    -p 80:80 \
    --name nginx-angular \
    --env MAPBOX_TOKEN=${MAPBOX_TOKEN} \
    quay.io/mechevarria/nginx-angular