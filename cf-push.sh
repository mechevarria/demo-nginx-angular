#!/usr/bin/env bash

cf push nginx-angular \
    -m 64M \
    -k 256M \
    --docker-image quay.io/mechevarria/nginx-angular \
    --no-start

cf se nginx-angular MAPBOX_TOKEN $MAPBOX_TOKEN

cf start nginx-angular
