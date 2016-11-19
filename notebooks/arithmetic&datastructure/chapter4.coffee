class Stack
  constructor: ()->
    @data =[]

  pop: ()->
    if @data.length>0 then --@data.length
  push: (ele)->
    @data[@data.length] = ele
  peek: ()->
    @data[@data.length-1]

mulBase = (num,base)->
  stack = new Stack()
  do ()->
    stack.push(num%base)
    num = Math.floor(num/base)
  while num>0
    stack.push(num%base)
    num = Math.floor(num/base)
  parseInt(stack.data.reverse().join(''))

isPalindrome = (word)->
  reversewd = word.split('').reverse().join('')
  if reversewd is word then true else false

factorial = (num)->
  if not(typeof num is 'number') then false
  num = parseInt(num)
  result = 1
  stack = new Stack()
  while (num>0)
    stack.push(num--)
  console.log(stack.data)
  console.log('#----')
  for i in stack.data
    result *= i
  return result

console.log(factorial(5))