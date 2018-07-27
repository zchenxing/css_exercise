function setRem() {
    var scrren = document.documentElement.clientWidth || 375
    document.getElementsByTagName('html')[0].style.fontSize = scrren / 10 + "px"
} 

setRem();