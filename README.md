# Typescript Package Template

This is a package template for using Typescript with Node.js

# Installation

This repository is not a node package. You cannot use npm install, instead use the following
procedure to make a new repro that is a copy of the template. 

The procedure is described by github here https://help.github.com/articles/duplicating-a-repository/

The required commands are listed below as a model for a shell script, works on mac osx

```
#!/bin/bash
new_pkg=$1
echo $new_pkg
body=$(printf '{ "name": "%s"' "$new_pkg")

# one positional parameter which is new package name
echo copying ts-package-template to "$body"

#create the new repo
curl -u 'username:password' https://api.github.com/user/repos -d "$body"

#clone the template repo to local directory
git clone --bare https://github.com/schardtbc/ts-package-template.git 

cd ts-package-template.git

# mirror the template repo to the newly created repo

################ Note ################################
# you need to change schardtbc to your github username
# in the following lines of code

git push --mirror https://github.com/schardtbc/$1.git

cd ..
# delete the unneeded local copy of the template repo
rm -rf ts-package-template.git


#clone the new package repo to local storage
git clone https://github.com/schardtbc/$1.git
cd $1

# recreate the README.md file
rm README.md
echo $1 > README.md

# change name of package in the package.json file
sed -i "old" s/ts-package-template/$1/g package.json

rm package.jsonold

# use npm install, to pull down all dependencies for your new package
# using the templates package.json
npm install

git add -A 
git commit -m "finishing install of package copied from template ts-package-template"
git push origin master

exit
```

