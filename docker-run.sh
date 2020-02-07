#!/usr/bin/env bash

docker run \
    -p 80:80 \
    --env MAPBOX_TOKEN=${MAPBOX_TOKEN} \
    quay.io/mechevarria/frontend-angular