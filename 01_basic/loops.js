// console.log("Web Bocket")
// let sum=0
// for(let i=1;i<=5;i++){
//     sum+=i
// }
// console.log(sum)

// let i=1;
// while(i<=5){
//     console.log('i =',i)
//     i++
// }
// let i=1
// do{
//     console.log("Good Morning")
//     i++
// }while(i<1)

// let str='javascript'
// let size=0;
// for (let i of str){
//     console.log(i)
//     size++
// }
// console.log(size)

let student={
    name:'Shuvendu',
    age:19,
    CGPA:8.7
}
console.log(student)

for (let key in student){
    console.log('key=',key,'and value =',student[key])
}