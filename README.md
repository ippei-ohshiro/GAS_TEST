# Google Apps Scriptのテスト用

* node 14.17.4
* clasp 2.4.0


# Installation
## clasp
```
$ npm i @google/clasp -g
```
## GAS API ON
https://script.google.com/home/usersettings


# Usage
```
$ cd [project]
$ npm init
$ clasp login
```

## create new
* standalone
```
$ cd src
$ clasp create [project name]
```

* container bind
```
$ clasp create [project name] --type [docs/sheets/slides/forms]
```

```.clasp.json
{
    "scriptId":"your script ID",
    "rootDir": "src"
}
```

## deploy
```
$ clasp push
```