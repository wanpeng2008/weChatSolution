#!/bin/sh
DEST_DIR="../AppParcelGateway/src/main/resources/static"
FROM_DIR="./dist"

echo "ng building..."
ng build
echo "clean "$DEST_DIR
rm -rf $DEST_DIR/*
echo "copy to "$DEST_DIR
cp -R $FROM_DIR/* $DEST_DIR/
