#!/usr/bin/env bash

cf push nginx-angular \
    -m 64M \
    -k 256M \
    --docker-image quay.io/mechevarria/nginx-angular
