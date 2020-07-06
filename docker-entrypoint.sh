#!/usr/bin/env bash

set -e

envsubst < /usr/share/nginx/html/assets/js/env.template.js > /usr/share/nginx/html/assets/js/env.js

exec "$@"