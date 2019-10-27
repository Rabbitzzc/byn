# myn

[![build status](https://travis-ci.com/Rabbitzzc/myn.svg?branch=master)](https://travis-ci.com/Rabbitzzc/myn.svg?branch=master)

Mixture of yarn and npm. `myn`'s cli is meant to behave exactly the same with `yarn`.

Never have to switch between npm and yarn [add, remove, init] ever again.

When I download a repository, I always choose to use the yarn command, so sometimes there are two files in the repository, `package-lock.json` file and `yarns.lock` file, which makes me very upset.

Try `myn`, and remove the annoyance.

## Install

```sh
# use npm
npm install myn -g
# use yarn
yarn global myn
```

## Usage

```sh
# install
myn # or myn install

# dep
myn add axios

# devDep
myn add axios --dev
myn add axios --D

# remove
myn remove axios

# scripts
myn test
myn build
myn dev
```

## ChangeLog
- `myan ==> myn`.

## MIT
[MIT](./LICENCE)
