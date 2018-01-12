#!/bin/bash
set -eo pipefail

cd $(git rev-parse --show-toplevel)
if [ ! -d ../objectenc ]; then
    echo "Clone objectenc to ../"
    echo "git clone git@github.com:aperturerobotics/objectenc.git $(pwd)/../objectenc"
    exit 1
fi

finalize() {
    pbts -o ./src/pb/${1}.d.ts ./src/pb/${1}.js
    sed -i '1s;^;/* tslint:disable */\n;' ./src/pb/${1}.d.ts
}

export PATH=$PATH:$(pwd)/node_modules/.bin
pbjs -t static-module -w commonjs -o ./src/pb/objectenc.js ../objectenc/objectenc.proto
finalize objectenc

pbjs -t static-module -w commonjs -o ./src/pb/aes.js ../objectenc/aes/aes.proto
finalize aes
