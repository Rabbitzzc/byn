/**
 * @description check yarn ? npm ?  myn argv transform npm
 */
const fs = require('fs')
const path = require('path')
const minimist = require("minimist")

const transArgs = require('./transArgs')

// refer to https://github.com/sindresorhus/has-yarn/blob/master/index.js
// let hasYarn = (cwd = process.cwd()) => fs.existsSync(path.resolve(cwd, 'yarn.lock'))

// exit yarn.lock file ??
let hasYarn = () => {
    return new Promise(resolve => {
        // can access ? need check
        fs.access(
            path.resolve(process.cwd(), 'package-lock.json'),
            fs.constants.F_OK, // mode
            err => {
                resolve(!!err)
            }
        )
    })
}

// myn args ===>  yarn args
// methods of myn synchronize with yarn, so just return.
let yarnArgs = mynArgs => mynArgs

// myn args ===> npm args
let npmArgs = mynArgs => {
    // formate args  node a b c  ==> [a,b,c]
    const args = minimist(transArgs(mynArgs))
    // obj
    const commands = args._

    // yarn global add  xxx seans it does not belong to the current repository, so just run yarn
    if (commands[0] === 'global') {
        // yarnArgs(mynArgs)
        return ['install', ...commands.slice(2), '-g']
    }
    // default arg. if you use "yarn", means that you want to run "npm install" 
    const tgt = commands.length ? commands[0] : 'install'

    // --save --save-dev -o -D ex.
    const opt_commands = commands.slice(1)
    let [npm_tgt, npm_args] = ['', []]

    if (tgt === 'install') {
        npm_tgt = 'install'
    } else if (tgt === 'add') {
        npm_tgt = 'install'
        let save_type = (args.dev || args.D) ? '--save-dev' : '--save'
        npm_args = [...opt_commands, save_type]
    } else if (tgt === 'remove') {
        [npm_tgt, npm_args] = ['uninstall', opt_commands]
    } else if (tgt === 'init') {
        // init when you need
        npm_tgt = 'init'
    } else {
        [npm_tgt, npm_args] = ['run', commands]
    }
    return [npm_tgt, ...npm_args]
}

module.exports = {
    hasYarn,
    yarnArgs,
    npmArgs
}