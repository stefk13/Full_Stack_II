console.log("Week 01 - Buffer Examples")

console.log(__dirname)
console.log(__filename)
console.log(process.cwd())
// console.log(process.env)
//console.log(process)
// var buf = new Buffer(10) - depricated
buf = Buffer.alloc(10)
console.log(buf)
buf = Buffer.from("A Hello")
console.log(buf)
console.log(buf.toString())
console.log(buf[0])
console.log(buf[1])
// console.log(buf[7]) - undefined
// buf[7] = 0x66
// console.log(buf[7]) - undefined

console.log(buf.length)

const str = "🤣┌( ಠ_ಠ)┘"
var buff1 = Buffer.from(str)
console.log(buff1.length)
console.log(buff1.toString())

for(a of buff1.entries()){
    console.log(a)
}

console.log(buff1.toString('hex'))
console.log(buff1.toJSON())

var buff2 = Buffer.alloc(5, 65) //Initializing 5 spaces to ASCII value of 'A'
console.log(buff2.toString())

var buff3 = Buffer.alloc(5, 'A', 'ascii') 
console.log(buff3.toString())

buff3[1] = 66

console.log(buff3.toString())

var buff3 = Buffer.alloc(10)
buff3.write("Hello World")
console.log(buff3.toString()) //Hello Worl
console.log(buff3.length)

var a = Buffer.from('abc')
var b = Buffer.from('aca') // learn this
var c = Buffer.compare(a,b)

console.log(c)

//Concate
var newBuffer = [a,b]
console.log(newBuffer.toString())

var concateBuffer = Buffer.concat(newBuffer)
console.log(concateBuffer.toString())


//Check if buffer contains value
var d = concateBuffer.includes('ab')
console.log(d)

var d = concateBuffer.includes(b)
console.log(d)

//Copy
var a = Buffer.from('abcdef')
var b = Buffer.from('aca')
a.copy(b)
console.log(a.toString()) //abcdef
console.log(b.toString()) //abc
console.log("---------")

var a = Buffer.from ('abcde')
var b = Buffer.alloc(20)
a.copy(b,4,2,5)
console.log(a.toString()) //abcde
console.log(b.toString()) //