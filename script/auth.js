



/// Listen for auth status change

auth.onAuthStateChanged(user=>{
   //console.log(user) // check the user is still logged in or not
    
   if(user){
    db.collection('').get().then(snapshot=>{
        setUPGuide(snapshot.doc) // index.js
        
    }) }
   else{
   setUPGuide([]);  
}

})

///when user logging otherwise dont show the data from the store (normal store);






//sign up
const signupform =document.querySelector('#signup-form');
 
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email=signupform['signup-email'].value
    const password=signupform['signup-password'].value

  //   console.log(email,password)



  //sign up the user
  auth.createUserWithEmailAndPassword(email,password).then(
      cred=>{
          ////////console.log(cred)

      const modal=document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupform.reset() //clean up the signup form

  })

})


//logout

const logout= document.querySelector('#logout');

logout.addEventListener('click',(e)=>{
   e.preventDefault();
   auth.signOut()
});
//login
const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
     
    
    //get user info
    const email=loginForm['login-email'].value;
    const password=loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email,password).then(
        (cred)=>{
                            //  console.log(cred.user)
            //close the login form and reset the form
            const modal=document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset()
        }
    )
})
