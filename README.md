# byn

![](https://travis-ci.com/Rabbitzzc/byn.svg?branch=master)

Blend yarn and npm. `byn`'s cli is meant to behave exactly the same with `yarn`.

Never have to switch between npm and yarn [add, remove, init] ever again.

When I download a repository, I always choose to use the yarn command, so sometimes there are two files in the repository, `package-lock.json` file and `yarns.lock` file, which makes me very upset.

Try `byn`, and remove the annoyance.

## Install

```sh
# use npm
npm install byn -g
# use yarn
yarn global byn
```

## Usage

```sh
# install
byn # or byn install

# dep
byn add axios

# devDep
byn add axios --dev
byn add axios --D

# remove
byn remove axios

# scripts
byn test
byn build
byn dev
```

## ChangeLog
- `myan ==> byn`.

## MIT
[MIT](./LICENCE)
