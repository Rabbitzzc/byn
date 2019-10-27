const test = require('tap').test
const {
    npmArgs,
    hasYarn
} = require("../src/check")


test("npmArgs: byn add", function (t) {
    const ref = ['install', 'axios', '--save']
    t.same(npmArgs(['add', 'axios']), ref)
    t.end()
})

test("npmArgs: byn add -D", function (t) {
    const ref = ['install', 'axios', '--save-dev']
    t.same(npmArgs(['add', 'axios', '-D']), ref)
    t.end()
})

test("npmArgs: byn add --dev", function (t) {
    const ref = ['install', 'axios', '--save-dev']
    t.same(npmArgs(['add', 'axios', '--dev']), ref)
    t.end()
})


test("npmArgs: byn init", function (t) {
    const ref = ['init']
    t.same(npmArgs(['init']), ref)
    t.end()
})

test("npmArgs: byn", function (t) {
    const ref = ['install']
    t.same(npmArgs([]), ref)
    t.end()
})

test("npmArgs: byn remove", function (t) {
    const ref = ['uninstall', 'axios']
    t.same(npmArgs(['remove', 'axios']), ref)
    t.end()
})

test("npmArgs: byn scripts", function (t) {
    const ref = ['run', 'test']
    t.same(npmArgs(['test']), ref)
    t.end()
})

test("npmArgs: byn global", function (t) {
    const ref = ['install', 'axios', '-g']
    t.same(npmArgs(['global', 'add', 'axios']), ref)
    t.end()
})


test("hasYarn: judge", function (t) {
    hasYarn().then(res => {
        t.equals(res, true)
        t.end()
    })
})