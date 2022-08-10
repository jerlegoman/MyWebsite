const htmlAge = document.querySelector("#age");
const date = new Date();
dd = date.getDate();
mm =date.getMonth() + 1;
yy = date.getFullYear();
birthYear = 2001
let birthmonth = 12;
let birthday = 24;
let initAge = yy - birthYear;
let initMonth = mm - birthmonth;
console.log(dd);
console.log(mm);
console.log(yy);
console.log(initAge);
var formatedDate = mm + "/" + dd;
console.log(formatedDate);
var age = 0;
console.log(initMonth + "i");
//getAge();
//if (Date(birthdate) > Date(formatedDate)){
//    initAge - 1;
//    console.log("true")
//}
//console.log(initAge);
//console.log(date.compare(birthdate, brithdate));
//function getAge(){
    
if(initMonth < 0 || initMonth == 0 && dd < birthday){
    initAge = initAge- 1
    console.log(initAge);
    console.log("hi")
}
/*
else if (initMonth > 0 || birthmonth == 0 && dd >= birthday){
    age = initAge;
    console.log(age);
}
*/
//}
console.log(initAge)
htmlAge.innerHTML += initAge;
