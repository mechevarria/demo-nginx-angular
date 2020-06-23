#!/usr/bin/env bash

echo "Running environment variable replacement commands via bash since envsubst is not available"
cp ./dist/assets/js/env.template.js ./dist/assets/js/env.js

search='${MAPBOX_TOKEN}'
replace=$MAPBOX_TOKEN
sed -i s@$search@$replace@g ./dist/assets/js/env.js

search='${KEYCLOAK_URL}'
replace=$KEYCLOAK_URL
sed -i s@$search@$replace@g ./dist/assets/js/env.js

search='${KEYCLOAK_REALM}'
replace=$KEYCLOAK_REALM
sed -i s@$search@$replace@g ./dist/assets/js/env.js

search='${KEYCLOAK_ID}'
replace=$KEYCLOAK_ID
sed -i s@$search@$replace@g ./dist/assets/js/env.js

search='${KEYCLOAK}'
replace=$KEYCLOAK
sed -i s@$search@$replace@g ./dist/assets/js/env.js

echo "Running buildpack command"
varify -buildpack-yml-path ./buildpack.yml ./nginx.conf $HOME/modules $DEP_DIR/nginx/modules && nginx -p $PWD -c ./nginx.conf