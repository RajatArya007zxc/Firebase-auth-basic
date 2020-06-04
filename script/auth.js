//add admin cloud function
const adminForm=document.querySelector('.admin-actions');

adminForm.addEventListener('submit',e=>{
  e.preventDefault();
  const adminEmail=document.querySelector('#admin-email').value;
  const addAdminRole=functions.httpsCallable('addAdminRole');
  addAdminRole({email:adminEmail}).then((result)=>{
    console.log(result);
  })
})






// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      user.getIdTokenResult().then(idTokenResult=>{
       user.admin=idTokenResult.claims.admin;
       setupUI(user);
      })
    //  console.log('user logged in: ', user);
      db.collection('guides').onSnapshot (snapshot => {
        setupGuides(snapshot.docs);
        
      },error=>{
        console.log(error.message);
      });
    } else {
     // console.log('user logged out');
     setupUI();
      setupGuides([]);
    }
  })
  


/// create new  Guide 

const createForm=document.querySelector('#create-form');
createForm.addEventListener('submit',(e)=>{
e.preventDefault();
 db.collection('guides').add({
     name:createForm['title'].value,
     class:createForm['content'].value
 }).then(()=>{
     //close the modal 
     const modal=document.querySelector('#modal-create')
     M.Modal.getInstance(modal).close();
     createForm.reset();
 
 }).catch(error=>{
     console.log(error.message);

 })
})












  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
  
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        bio:signupForm['signup-bio'].value
      })
      
      // close the signup modal & reset form
      
    }).then(()=>{
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset(); 
    })
  });
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    });
  
  });