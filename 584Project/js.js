//majority of js code inside html files
//to help me learn java script better 
//
//will need to update later inside this javascript file


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}



//$('.toggletable').click(function () {
//$(this).closest('section').find('table').toggle();
//return false;
//});