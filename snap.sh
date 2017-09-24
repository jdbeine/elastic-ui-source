#!/bin/bash
EPOCH=`date +%s`

git add .
git commit -m "Snapshot at $EPOCH"
git push origin master
