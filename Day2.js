/*console.log("Reverse number")
let num=17
let mid=parseInt(num/2)+1
let tmid=mid-1*/

//Array
let numArray=[1,4,5,3]

console.log(numArray)

/*for(i=0;i<numArray.length;i++){
	console.log(numArray[i])
}
numArray.forEach((n)=>{
	console.log(n)
})*/

//find the max number in the array using forEach
/* let max=numArray[0]
 numArray.forEach((n)=>{
	if(n>max){
		max=n //(max<n)?max=n:n=name
		//(max<n)&&(max=n)
	}
})
console.log("max number is: " +max)*/

//print the nested array

/*
let nestedArray=[[1,2,30],[5,6],[8,5,3]]
console.log(nestedArray)

nestedArray.forEach((n)=>{
	console.log(n)
})


nestedArray.forEach((n)=>{
	n.forEach((n)=>{
	console.log(n)
	
    })
})*/

/*
a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the commen elements between a and b*/

/*let a=[4,5,6,3,7]
let b=[8,3,2,1,5]
 a.forEach((n)=>{
	 b.forEach((x)=>{
		if(n==x) {
			console.log(n)
		}
	 })
 })*/

//arr=[1,2,3,4,5,6]
//target=7
//write a code find all paired that sum up to the target

/*let arr=[1,2,3,4,5,6]
let target=7
arr.forEach((n)=>{
	arr.forEach((c)=>{
		if(n!=c){
			if(target==n+c)
				console.log(n+" , "+c)
		}
	})
})*/

//[4,8,3,4,3,2,1,8,4]
//find the most freqent element in the array
let count=0
let frequent=0
let f
let arrayNew = [4,8,3,4,3,2,1,8,4]
 arrayNew.forEach((n)=>{
	 arrayNew.forEach((k)=>{
		 if(n==k)
			count=+1
	 })
	 if (count>frequent)
	 {
		 frequent =count
		 f=n
	 }
 })
 console.log("frequent is "+f);

//Array operation
//push and pop
/*arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)*/

//reverse the array using push and pop
//a b c d -> d c b a

let stack=['a','b','c','d']
console.log(stack)
let reverseStack=[]
while(stack.length>0)
{
	reverseStack.push(stack.pop())
}

console.log(reverseStack)

//JSON
//{key:value}
let student ={regno : '2021/ict/21', name:'James' ,age:21,
course :'IT',skills:['Java',"JS",'C++']}
console.log(student)
console.log(student.name)
 