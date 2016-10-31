#!/usr/bin/env bash

PORT="8002"
APP_NAME="mybnb-service"

if [ -n "$PORT" ]; then
    echo "Listening on port: $PORT"
    export PORT
fi

CURRENT_PATH=`dirname $0`
pm2 start "$CURRENT_PATH/../app.js" --name "$APP_NAME"