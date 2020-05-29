

  /////// Setup materialize component

  document.addEventListener('DOMContentLoaded',function(){

    var modals=document.querySelectorAll('.modal');
    M.Modal.init(modals);  //library


    var items=document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  })