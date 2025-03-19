//arrow function

function PrintMsg(){
	console.log("Hello JS")
}


const msg = ()=>{console.log("Hello JS")}
//console.log(msg)
msg()

//write an arrow function to sum 2 numbers

const add =(a,b)=>{return a+b}
console.log(add(4,5))

const  mult = (a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))
//Reset parameter


const mysum =(...n)=>{
	console.log(n)
}

mysum(4,5,6,89,2)

//Reset parameter

const mysUm=(...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}



//add the elements in  My sum
const mySum=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}

console.log(mySum(4,5,6,8,2))

// call back functon
//a function passed as a arguement

const greet =(msg,fun)=>{
	console.log("Hi..."+msg)
	fun()
}

greet("Good morning",()=>console.log("My name is David"))

const multtwo = (n)=>n*2

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}

myarr(multtwo,4,5,6,8,2)