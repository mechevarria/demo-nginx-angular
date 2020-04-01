#!/usr/bin/env bash

app=nginx-angular

cf push $app \
    -m 64M \
    -k 256M \
    --docker-image quay.io/mechevarria/$app \
    --no-start

cf se $app MAPBOX_TOKEN $MAPBOX_TOKEN

cf start $app
