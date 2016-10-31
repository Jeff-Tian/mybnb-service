#!/usr/bin/env bash

api_test() {
    if http --check-status --ignore-stdin --timeout=5 "$2" > /dev/null; then
        echo $1' OK'
    else
        echo $1' Failed'
    fi
}

name="test"
url="http://localhost:8002/"
api_test $name $url