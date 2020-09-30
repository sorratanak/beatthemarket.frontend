#!/bin/sh -x

mkdir -p /tmp/workspace/beatthemarket.frontend &&
export BEATTHEMARKET_VERSION=$(date +%Y%m%d_%H%M%S)_$(git rev-parse --short HEAD) &&
echo $BEATTHEMARKET_VERSION > /tmp/workspace/beatthemarket.frontend/version.txt

yarn build

sh -c "\
cp -R .ebextensions build/ && \
cd build/ && \
zip -r $BEATTHEMARKET_VERSION.zip . && \
zip -j $BEATTHEMARKET_VERSION.zip /tmp/workspace/beatthemarket.frontend/version.txt && \
mv $BEATTHEMARKET_VERSION.zip .."
