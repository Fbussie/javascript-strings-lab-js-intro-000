/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
'Hello, ${specialGuest}!'
"Hello"+{specialGuest}+"!"
"Hello"+specialGuest+"!"
"Hello"+greetSpecialGuest+"!"
"Hello, "+ greetSpecialGuest + "!"
'Hello, '+greetSpecialGuest+"!"''
"Hello,"+specialGuest+"!"
`Let\'s talk about`+${topic}`.`
var specialGuest="Neil deGrasse Tyson
"Hello,"+specialGuest+"!"
"Hello,"+specialGuest+"!"
greeting+specialGuest+"
"Hello,"+specialGuest+"!"
"Hello,"+greetSpecialGuest+"!"