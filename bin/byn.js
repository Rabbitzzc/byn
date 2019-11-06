#!/usr/bin/env node

/**
 * @description: [byn] command. The condition determines whether the warehouse uses npm or yarn
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
const fs = require('fs')
const path = require('path')

const node_version = process.versions.node // node version
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
    const byn_args = process.argv.slice(2)

    const first = byn_args[0]
    if (first === '-v' || '--version') {
        console.log('now byn version is v' +  colors.green(JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json"))).version))
        return
    }

    // check yarn or npm
    const redirect_command = has_yarn ? 'yarn' : 'npm'

    const command_args = has_yarn ? yarnArgs(byn_args) : npmArgs(byn_args)

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
    console.log(err)
    process.exit(1)
})