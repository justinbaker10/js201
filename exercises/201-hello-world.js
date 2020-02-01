// Write a function "hello" that takes one argument (a name), and returns a
// string that says hello to the name.
// Example: hello('Mustache') should return 'Hello, Mustache!'
// Hey Flex Class, it'd s Patrick
// Great question
function hello (name = 'Mustache') {
    return 'Hello, ' + name + '!'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "helloDefault" such that if no name is given it will return
// 'Hello, world!'
// Otherwise it behaves the same as the "hello" function.
function helloDefault (name = 'Mustache') {
    console.assert(helloDefault[name] == 'Mustache')
    console.assert(helloDefault[name] === 'world!')
}