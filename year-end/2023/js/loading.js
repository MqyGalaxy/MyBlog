window.onload = function(){
    setTimeout(function(){
    var loader = document.getElementsByClassName("loading")[0];
    loader.className="loading fadeout" ;//使用渐隐的方法淡出loading page
    setTimeout(function(){loader.style.display="none"},5000)
    },5000)
}