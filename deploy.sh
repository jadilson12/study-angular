#!/usr/bin/env sh

# abort on errors
set -e

# build
ng build --prod --base-href https://jadilson12.github.io/demo/
# ng --dir=dist/study

# navigate into the build output directory
# path=/dist/study
cd dist/study

git init
git add -A
git commit -m 'deploy'
git checkout -b gh-pages
# git push -f git@github.com:jadilson12/demo master
git push -f git@github.com:jadilson12/demo gh-pages

cd ../../

rm -rf dist/study
