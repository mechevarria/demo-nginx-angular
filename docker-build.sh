#!/usr/bin/env bash

docker build -t quay.io/mechevarria/nginx-angular .

docker push quay.io/mechevarria/nginx-angular