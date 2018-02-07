#!/bin/bash
set -eo pipefail

cd $(git rev-parse --show-toplevel)
if [ ! -d ../objectenc ]; then
    echo "Please run this from the JS monorepo"
    exit 1
fi

finalize() {
    pbts -o ./pb/${1}.d.ts ./pb/${1}.js
    sed -i '1s;^;/* tslint:disable */\n;' ./pb/${1}.d.ts
    git add ./pb/${1}.d.ts ./pb/${1}.js
}

export PATH=$PATH:$(pwd)/node_modules/.bin
pbjs -t static-module -w commonjs -o ./pb/objectenc.js ./proto/objectenc.proto
finalize objectenc

pbjs -t static-module -w commonjs -o ./pb/aes.js ./proto/aes/aes.proto
finalize aes

npm run precommit
