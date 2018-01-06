#!/bin/bash
set -eo pipefail

cd $(git rev-parse --show-toplevel)
if [ ! -d ../objectenc ]; then
    echo "Clone objectenc to ../"
    echo "git clone git@github.com:aperturerobotics/objectenc.git $(pwd)/../objectenc"
    exit 1
fi

export PATH=$PATH:$(pwd)/node_modules/.bin
pbjs -t static-module -w commonjs -o ./src/pb/objectenc.js ../objectenc/objectenc.proto
pbts -o ./src/pb/objectenc.d.ts ./src/pb/objectenc.js
sed -i '1s;^;/* tslint:disable */\n;' ./src/pb/objectenc.d.ts
