#!/bin/bash
EPOCH=`date +%s`

echo 'Undoing all working & staged changes to most recent commit.'
#need a logging device...
git stash -u
