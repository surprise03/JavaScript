// 1st Answer
for(var i=1;i<=10;i++){
    console.log(i)
}

//2nd Answer 
var b=0;
for(var a=1;a<=100;a++){
    b=b+a
}
console.log(b)

// 3rd Answer
function sun(num){
    for(var a=1;a<=10;a++){
        console.log(`${num} x ${a} =${num*a}`)
    }
}
sun(7)

// 4th Answer
for(var num=1;num<=20;++num){
    if(num%2==0){
        console.log(num)
    }
    
 }

// 5th Answer
num=1
for(var num1=1;num1<=5;num1++){
    num=num*num1
} 
console.log(num)

// 6th Answer
function Power(num){
    for(var a=7;a<=7;a++){
          console.log(num**a)
    }
}
Power(2) 

// 7th Answer
for(var a=20;a>=1;a--){
    if(a%2==1){
        console.log("this are odd numbers"+a) 
    }
}