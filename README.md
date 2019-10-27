# myan

[![build status](https://travis-ci.com/Rabbitzzc/myan.svg?branch=master)](https://travis-ci.com/Rabbitzzc/myan.svg?branch=master)

Mixture of yarn and npm. `myan`'s cli is meant to behave exactly the same with `yarn`.

Never have to switch between npm and yarn [add, remove, init] ever again.

When I download a repository, I always choose to use the yarn command, so sometimes there are two files in the repository, `package-lock.json` file and `yarns.lock` file, which makes me very upset.

Try `myan`, and remove the annoyance.

## Install

```sh
# use npm
npm install myan -g
# use yarn
yarn global myan
```

## Usage

```sh
# install
myan # or myan install

# dep
myan add axios

# devDep
myan add axios --dev
myan add axios --D

# remove
myan remove axios

# scripts
myan test
myan build
myan dev
```

## MIT
[MIT](./LICENCE)
