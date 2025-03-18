let numArray=[1,4,5,3]

console.log(numArray)
for(i=0;i<numArray.length;i++){
	console.log(numArray[i])
}
numArray.forEach((n)=>{
	console.log(n)
})

//find the max number in the array using forEach
 let max=numArray[0]
 numArray.forEach((n)=>{
	if(n>max){
		max=n //(max<n)?max=n:n=name
		//(max<n)&&(max=n)
	}
})
console.log("max number is: " +max)

//print the nested array


let nestedArray=[[1,2,30],[5,6],[8,5,3]]
console.log(nestedArray)

nestedArray.forEach((n)=>{
	console.log(n)
})


nestedArray.forEach((n)=>{
	n.forEach((n)=>{
	console.log(n)
	
    })
})

//Array operation
//push and pop
arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)
