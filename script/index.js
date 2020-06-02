
// DOM elements
const guideList = document.querySelector('.guides');

const loggedOutLink=document.querySelectorAll('.logged-out');
const loggedInLinks=document.querySelectorAll('.logged-in');

//setup Ui

const setupUI=(user)=>{
  if(user){
    loggedInLinks.forEach(item=>item.style.display='block')
     loggedOutLink.forEach(item=>item.style.display='none')
  }
  else{
    loggedInLinks.forEach(item=>item.style.display='none')
    loggedOutLink.forEach(item=>item.style.display='block')

  }
}



// setup guides
const setupGuides = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.name} </div>
          <div class="collapsible-body white"> ${guide.class} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});