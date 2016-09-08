;(function(){
  
var d = document,
    menuBtn = d.getElementById('menuBtn'),
    menu = d.getElementById('menu');
    
addEvent(menuBtn,'click',openMenu);  
function openMenu() {  
    menu.classList.toggle('open');
}
// кроссбраузерная установка обработчика событий
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, handler);
  }
  return false;
}

}() );
