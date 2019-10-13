#!/usr/bin/env bash

port=8080

docker run \
    -p ${port}:${port} \
    -e PORT=${port} \
    localhost/frontend-angular
