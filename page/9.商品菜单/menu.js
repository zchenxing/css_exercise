
var list = document.getElementsByTagName("li");
var rightBox = document.getElementById("right-box");
var tempRight = {}, tempLi = {};


rightBox.onmousemove = function() {
    rightBox.setAttribute('class', "");  
    tempRight.setAttribute('class', "right-content");

    tempLi.style.backgroundColor = "rgba(250, 250, 250, .3)";
    tempLi.style.boxShadow = "1px 2px 10px rgba(0, 0, 0, .3)";
}
rightBox.onmouseleave = function (){
    rightBox.setAttribute('class', "none");
    tempRight.setAttribute('class', "right-content none");    
    
    tempLi.style.backgroundColor = "";
    tempLi.style.boxShadow = ""

    tempRight = null;
    tempLi = null;
   
}


for(let i = 0; i < list.length; i++) {

    list[i].onmouseover = function (){
        tempLi = list[i];
        var id = this.id;
        var show = document.getElementById('menu-'+id);
        if (show) {
            tempRight = show;
            show.setAttribute('class', "right-content");
            rightBox.setAttribute('class', "");
        }
    }

    list[i].onmouseleave = function (){
        var id = this.id;
        var show = document.getElementById('menu-'+id);
        if (show) {
            show.setAttribute('class', "right-content none");        
            rightBox.setAttribute('class', "none");
        }
    }
}
