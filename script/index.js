const guideList=document.querySelector('.guides');
//setup guides

const setUPGuide=(data)=>{
  let html='';
  data.forEach(doc=>{
    const guide=doc.data();
    const li= `
    <li>
    <div class="collapsible-header grey lighten-4">${guide.title}</div>
    <div class="collapsible-body white">${guide.content}</div>
  </li>
    
    
    
    `;
    html +=li;

  })
  guideList.innerHTML=html;
}





  /////// Setup materialize component

  document.addEventListener('DOMContentLoaded',function(){

    var modals=document.querySelectorAll('.modal');
    M.Modal.init(modals);  //library


    var items=document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  })