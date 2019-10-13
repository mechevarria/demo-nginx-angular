#!/usr/bin/env bash

docker build \
    -t localhost/frontend-angular . \
    --build-arg port=8080
