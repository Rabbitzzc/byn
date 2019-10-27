/**
 * @description trans like [yarn add -D a b, yarn add a b -D] 
 * @param {Array} args 
 */

module.exports = function transArgs(args) {
    let opt = args.filter(v => /^-{1,2}.+$/.test(v))
    let re_args = args.filter(v => !/^-{1,2}.+$/.test(v))
    return re_args.concat(opt)
}