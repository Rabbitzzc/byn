#!/usr/bin/env node

/**
 * @description: [myan] command. The condition determines whether the warehouse uses NPM or yarn
 * @date: 2019-10-25
 */

const {
    spawn
} = require('child_process')
const colors = require('colors')
const {
    hasYarn,
    yarnArgs,
    npmArgs
} = require('../src/check')

const node_version = process.versions.node // 判断当前 node 的环境
const core_version = parseInt(node_version.split('.')[0], 10)


// yarn not support less node v4
if (core_version < 4) {
    console.error('Node version ' + node_version + ' is not supported if you use Yarn, please use Node.js 4.0 or higher.')
    process.exit(1)
}

// The command process
async function main() {
    // get command argv
    const has_yarn = await hasYarn()
    const myan_args = process.slice(2)

    // check yarn or npm
    const redirect_command = has_yarn ? 'yarn' : 'npm'

    const command_args = has_yarn ? yarnArgs() : npmArgs()

    const emoji = {
        'yarn': '🌝',
        'npm': '🌛'
    }

    console.log(colors.green(`redirect ${emoji[redirect_command]} ${redirect_command}`))

    console.log(colors.blue(`${redirect_command} ${command_args.join(" ")}`))

    spawn(redirect_command, command_args, {
        stdio: "inherit"
    })
}


// catch err and exit
main().catch(err => {
    console.log(err.red)
    process.exit(1)
})