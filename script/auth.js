//sign up
const signupform =document.querySelector('#signup-form');
 
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email=signupform['signup-email'].value
    const password=signupform['signup-password'].value

  //   console.log(email,password)



  //sign up the user
  auth.createUserWithEmailAndPassword(email,password).then(
      cred=>{console.log(cred)

      const modal=document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupform.reset() //clean up the signup form

  })

})

const logout= document.querySelector('#logout');

logout.addEventListener('click',(e)=>{
   e.preventDefault();
   auth.signOut().then(
       ()=>console.log("log out ")
   )
})