// food deleivery
function orderReacived() {
    return new Promise ((resolve,reject)=>{
       setTimeout(()=>{
        resolve("order recived");
       },1000);
     });
}

function preparingOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Prepaireing your order");
        },3000)
    })
}
function packingFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("your food is being packed");
        },2000)
    })
}
function AssingningPerson(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("order is waiting to pickup");
        },2000)
    })
}
function delivering(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("on your way");
        },4000)
    })
}

orderReacived()
   .then(res=>{ 
           console.log(res) 
           return preparingOrder();})
   .then(res=>{
    console.log(res)
    return packingFood();
   }) 
   .then(res=>{
    console.log(res)
    return AssingningPerson()
   }) 
   .then(res=>{
    console.log(res)
    return  delivering()
   }) 
   .then(res=>{
    console.log(res)
   })  
   .catch(end=>console.error(end))
  
   
// 2nd Movie Ticket

function selectSeats(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Select your Seats")
            // reject("The server is down")

        },2000)
    })
}
function payment(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Processing your payment")
            // reject("The server is down")

        },3000)
    })
}
function conformingTickets(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Your tickets are on the way!!")
            // reject("The server is down")

        },1000)
    })
}

function conformed(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("An email has been sent to yoyr mail with the attacments ")
            // reject("The server is down")

        },2000)
    })
}
selectSeats()
     .then(res=>{
        console.log(res)
        return payment();
     })
     .then(res=>{
        console.log(res)
        return conformingTickets();
     })
     .then(res=>{
        console.log(res)
        return conformed();
     })
       .then(res=>{
        console.log(res)
        
     })
     .catch(end=>console.error(end))


// 3rd car service 

function checkIn(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("The car has checked in")
        },1000)
    })
}
function oildChange(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("the oil change has been done")
        },2000)
    })
}
function engineCheck(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Engine check has been done")
        },3000)
    })
}
function carWash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("car wash has been done")
        },2000)
    })
}
function qualityCheck(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Final check is done ")
        },2000)
    })
}

checkIn()
    .then(res=>{
        console.log(res)
        return oildChange()
    })
    .then(res=>{
        console.log(res)
        return engineCheck()
    })
    .then(res=>{
        console.log(res)
        return carWash()
    })
    .then(res=>{
        console.log(res)
        return qualityCheck()
    })
    .then(res=>{
        console.log(res)
       
    })
    .catch(err=>console.error(err))




// 4th laptop repair


function checkingIssue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Checking the problem in the laptop")
        },1000)
    })
}
function parts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Repacing the parts")
        },4000)
    })
}

function softwareUpdate(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("updating the software")
        },2000)
    })
}
function testing(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("final test ")
        },2000)
    })
}

function returning(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("returning to coustomer")
        },1000)
    })
}

checkingIssue()
     .then(res=>{
        console.log(res)
        return parts();
    })
    .then(res=>{
        console.log(res)
        return softwareUpdate();
    })
    .then(res=>{
        console.log(res)
        return testing();
    })
    .then(res=>{
        console.log(res)
        return returning();
    })
    .then(res=>{
        console.log(res)
       
    })
    .catch(err=>console.log(err))


// 5th Course Enrolmment

function courseAvailability(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Checking course availability")
        },1000)
    })
}
function payment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("processing payment")
        },3000)
    })
}
   

function id(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Generating enrollment ID")
        },1000)
    })
}
   
function materials(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" Sending course materials ")
        },2000)
    })
}
   
function classes(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Granting access to live classes")
        },2000)
    })
}

courseAvailability()
   .then(res=>{
    console.log(res)
    return payment()
})
.then(res=>{
    console.log(res)
    return id()
})
.then(res=>{
    console.log(res)
    return materials()
})
.then(res=>{
    console.log(res)
    return classes()
})

.then(res=>{
    console.log(res)
    
})
