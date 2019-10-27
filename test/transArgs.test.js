const test = require('tap').test

const transArgs = require('../src/transArgs')

test("-D not changed", function (t) {
    let arr = ['add', 'express', '-D']
    arr = transArgs(arr)
    t.same(arr, ['add', 'express', '-D'])
    t.end()
})

test("-D changed", function (t) {
    let arr = ['add', '-D', 'express']
    arr = transArgs(arr)
    t.same(arr, ['add', 'express', '-D'])
    t.end()
})

test("--save not changed", function (t) {
    let arr = ['add', 'express', '--save']
    arr = transArgs(arr)
    t.same(arr, ['add', 'express', '--save'])
    t.end()
})

test("--save changed", function (t) {
    let arr = ['add', '--save', 'express']
    arr = transArgs(arr)
    t.same(arr, ['add', 'express', '--save'])
    t.end()
})