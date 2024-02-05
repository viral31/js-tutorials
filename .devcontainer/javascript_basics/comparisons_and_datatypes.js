// normal comparison operators use in java only 
// only problem occurs when we are not comparing same data types
// if  we have to compare values so that we have to ensure that data types should be same 
// normal operators are >, < , =  and so on 
//so comparison and equal to operator is slightly different in java script  example given below 
// console.log(null >= 0)
// let val = null
// console.log (Number(val)) uncomment karke check karlena samjh jayenge 
// in java script "==" and "===" works differently keep in mind then 
// strict check is when we use === then it will check type also where as in normal == we use it like usual 
// we should avoid comparisons btw two diffent data types as java script is somewhat inconsistent here 
//--------------------------------- data types summary -------------------------------------------------
// primitive = 7 categories
// String, number , boolean , null , undefined , symbol , bigint
// non primitive / reference type 
// Array , objects , functions
// java script is dynamicallly type language .
const heroes = [ " shaktiman ", "naagraj " , "doga"]
// arrays 
let myobj = {
    name: "viral",
    age : 22,
}
// object 
const myfunction = function(){
    console.log("hello world")
}
