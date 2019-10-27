const test = require('tap').test
const {
    npmArgs,
    hasYarn
} = require("../src/check")


test("npmArgs: myan add", function (t) {
    const ref = ['install', 'axios', '--save']
    t.same(npmArgs(['add', 'axios']), ref)
    t.end()
})

test ("npmArgs: myan add -D", function(t) {
    const ref = ['install', 'axios', '--save-dev']
    t.same(npmArgs(['add', 'axios', '-D']), ref)
    t.end()
})

test ("npmArgs: myan add --dev", function(t) {
    const ref = ['install', 'axios', '--save-dev']
    t.same(npmArgs(['add', 'axios', '--dev']), ref)
    t.end()
})


test ("npmArgs: myan init", function(t) {
    const ref = ['init']
    t.same(npmArgs(['init']), ref)
    t.end()
})

test ("npmArgs: myan", function(t) {
    const ref = ['install']
    t.same(npmArgs([]), ref)
    t.end()
})

test ("npmArgs: myan remove", function(t) {
    const ref = ['uninstall', 'axios']
    t.same(npmArgs(['remove', 'axios']), ref)
    t.end()
})

test ("npmArgs: myan scripts", function(t) {
    const ref = ['run', 'test']
    t.same(npmArgs(['test']), ref)
    t.end()
})

test ("npmArgs: myan global", function(t) {
    const ref = undefined
    t.same(npmArgs(['global', 'add', 'axios']), ref)
    t.end()
})


test ("hasYarn: judge", function(t) {
    hasYarn().then(res => {
        t.equals(res, true)
        t.end()
    })
})
