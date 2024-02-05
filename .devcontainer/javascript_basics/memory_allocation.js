/* 
primitive types uses stack memory 
non primitive will use heap memory 
stack me copy miltaa hai or heap me reference 

*/
let myname = "Viral Maru"
let difName= myname 
difName = "rohan maru"
console.log(difName) 
console.log(myname)
/* toh upar kya huaa basically myname me viral stored tha par jab apan ne dif name ko my name diya
 toh usne myname ki copy difname me save kari toh jab apan ne dif ko dusri value assign ki toh
  basically original my name ko kuch ni hua par same chij agar apan object ke sath karte toh uske 
  pass reference  aata toh  original me bhi change ho jata 
  // variable stack me hi define hogaa par variable ke pass reference hogaa heap kaa  non primitive 
  me 
   */
  
