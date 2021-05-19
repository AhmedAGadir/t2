#!/usr/bin/env bash 

cd $T2_HOME

git add . && /
git commit -m "update" && /
git push && /

echo "complete"
echo "LINK TO CODESANDBOX: https://codesandbox.io/s/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}"
echo "LINK TO STACKBLITZ: https://stackblitz.com/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}"