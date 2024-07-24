let random1 = Math.random()*100;
let first = {
    1 : "Jatoth",
    2 : "Dharavath",
    3 : "Lakavath",
    4 : "Sapavath",
    5 : "Guguloth",
    6 : "Nenavath",
    7 : "Lavudya",
    8 : "Banoth",
    9 : "Bhukya",
    10 : "Dhanavath"
}

let random2 = Math.random()*100;
let middle = {
    1 : "Adithya",
    2 : "Aravind",
    3 : "Karthik",
    4 : "Vivek",
    5 : "Upender",
    6 : "Sikinder",
    7 : "Santhosh",
    8 : "Akshay",
    9 : "Ashwinidath",
    10 : "Vidya Sagar"
}

// let random3 = Math.random()*100;
// let last = {
//     1 : "Naik",
//     2 : "Jadhav",
//     3 : "Goud",
//     4 : "Yadav",
//     5 : "Nair",
//     6 : "Pawar",
//     7 : "kumar",
//     8 : "Nayak",
//     9 : "Rathod",
//     10 : "Chavhan"
// }

function generate(obj,num){
    let value;
    if(num<=10){
       value = obj[1] 
    }
    else if(num>10 && num <=20){
       value = obj[2] 
    }
    else if(num>20 && num <=30){
       value = obj[3] 
    }
    else if(num>30 && num <=40){
       value = obj[4] 
    }
    else if(num>40 && num <=50){
       value = obj[5] 
    }
    else if(num>50 && num <=60){
       value = obj[6] 
    }
    else if(num>60 && num <=70){
       value = obj[7] 
    }
    else if(num>70 && num <=80){
       value = obj[8] 
    }
    else if(num>80 && num <=90){
       value = obj[9] 
    }
    else{
       value = obj[10] 
    }
    return value;
}

let first_name = generate(first,random1)
let middle_name = generate(middle,random2)
// let last_name = generate(last,random3)

// console.log(random1,random2,random3)
console.log(`The generated Name is : ${first_name} ${middle_name}`)
// If you want you can use last name also and print it