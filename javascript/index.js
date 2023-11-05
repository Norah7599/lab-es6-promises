// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));



// ___________________________________________________________Iteration 1 - using callbacks____________________________________________

getInstruction('mashedPotatoes',0,(step0) =>{
  document.querySelector("#mashedPotatoes").innerHTML+= `<li>${step0}</li>`

getInstruction(`mashedPotatoes`,1,(step1)=>{
  document.querySelector("#mashedPotatoes").innerHTML+=`<li>${step1}</li>`

getInstruction(`mashedPotatoes`,2,(step2)=>{
  document.querySelector("#mashedPotatoes").innerHTML+=`<li>${step2}</li>`

getInstruction(`mashedPotatoes`,3,(step3)=>{
  document.querySelector("#mashedPotatoes").innerHTML+=`<li>${step3}</li>`

getInstruction(`mashedPotatoes`,4,(step4)=>{
  document.querySelector("#mashedPotatoes").innerHTML+=`<li>${step4}</li>`
  document.querySelector("#mashedPotatoes").innerHTML+=`<li>Mashed potatoes are ready!</li>`
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

          },(error)=>console.log(error));
        },(error)=>console.log(error));
     },(error=>console.log(error)));
   },(error)=>console.log(error));
  },(error=>console.log(error)));

    // _________________________________________________________Iteration 2 - using promises__________________________________________________________________

obtainInstruction('steak',0)
.then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  return obtainInstruction('steak',1);
})
.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  return obtainInstruction('steak',2);
})
 .then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  return obtainInstruction('steak',3);
 })
 .then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return obtainInstruction('steak',4);
 })
 .then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return obtainInstruction('steak',5);
 })
 .then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  return obtainInstruction('steak',6);
 })
 .then ((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  document.querySelector("#steak").innerHTML += `<li>Steak is ready! </li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
 })

 .catch((error) => {
  console.log(error);
});
//  _________________________________________________________Iteration 3 using async/await________________________________________________
async function makeBroccoli() {
  try{
    step0=await obtainInstruction('broccoli',0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    step1=await obtainInstruction('broccoli',1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    step2=await obtainInstruction('broccoli',2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    step3=await obtainInstruction('broccoli',3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    step4=await obtainInstruction('broccoli',4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    step5=await obtainInstruction('broccoli',5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    step6=await obtainInstruction('broccoli',6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    step7=await obtainInstruction('broccoli',7);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    
    
  }catch (error){
    console.log(error);}
   
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
}
makeBroccoli();
// ___________________________________________________________________Bonus 2 - Promise all______________________________________________________________

const brusselsSproutsSteps = [];

for (let step = 0; step < 7; step++) {
  brusselsSproutsSteps.push(obtainInstruction('brusselsSprouts', step));
}

Promise.all(brusselsSproutsSteps)
  .then((steps) => {
    const brusselsSproutsList = document.querySelector('#brusselsSprouts');
    
    steps.forEach((step) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = step;
      brusselsSproutsList.appendChild(listItem);
    });

    const readyListItem = document.createElement('li');
    readyListItem.innerHTML = 'Brussels sprouts are ready!';
    brusselsSproutsList.appendChild(readyListItem);
    document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
  })
  .catch((error) => {
    console.log(error);
  });



