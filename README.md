# Typescript Package Template

This is a package template for using Typescript with Node.js

# Installation

This repository is not a node package. You cannot use npm install, instead use the following
procedure to make a new repro that is a copy of the template. 

The prceedure is descripbed by github here https://help.github.com/articles/duplicating-a-repository/

The required commands are listed below as a model for a shell script

```
#!/bin/bash

# one positional parameter which is new package name
echo copying ts-package-template to $1

#create the new repo
curl -u 'username:password' https://api.github.com/user/repos -d '{"name":"$1", "private": false}'

#clone the template repo to local directory
git clone --bare https://github.com/schardtbc/ts-package-template.git 

cd ts-package-template.git

# mirror the template repo to the newly created repo
git push --mirror https://github/schardtbc/$1.git

# delete the unneeded local copy of the template repo
rm -r ts-package-template

cd ..

clone the new package repo to local storage
git clone https://github/schardtbc/$1.git
cd $1
git remote -add origin https://github/schardtbc/$1.git

# recreate the README.md file
rm README.md
echo $1 > README.md

# change name of package in the package.json file
sed -i 's/ts-package-template/$1/g' package.json

# use npm install, to pull down all dependencies for your new package using the templates package.json
npm install

git push origin master

exit
```

