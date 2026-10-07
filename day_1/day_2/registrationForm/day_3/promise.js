  const myPromise = new Promise((resolve, reject) => {
let age = 19;
if(age >=18 ){
    resolve("Eligible for vote...")
} else {
    reject("Not Eligible for vote...");
}

})
const checkVoteEligibillity = () => {
    try{
        const msg = myPromise;
        console.log(msg);
        
    }
catch (error){
console.log(error);
}
checkVoteEligibillity();


//  myPromise
//  .then((msg)=> console.log(msg))
//  .catch((error) => console.log(error))

