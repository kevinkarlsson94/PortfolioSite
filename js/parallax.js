$( document ).ready(function() {

    function parallax(){
    var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
    prlx_lyr_1.style.top = -(window.pageYOffset / 8)+'px';
        
    var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
    prlx_lyr_2.style.top = -(window.pageYOffset / 3)+'px';
        
    var prlx_lyr_3 = document.getElementById('prlx_lyr_3');
    prlx_lyr_3.style.top = -(window.pageYOffset / 17)+'px';
        
    var prlx_lyr_4 = document.getElementById('prlx_lyr_4');
    prlx_lyr_4.style.top = -(window.pageYOffset / 6)+'px';
        
    var prlx_lyr_5 = document.getElementById('prlx_lyr_5');
    prlx_lyr_5.style.top = -(window.pageYOffset / 2)+'px';
        
        
        
    var prlx_lyr_6 = document.getElementById('prlx_lyr_6');
    prlx_lyr_6.style.top = -(window.pageYOffset / 20)+'px';
        
    var prlx_lyr_7 = document.getElementById('prlx_lyr_7');
    prlx_lyr_7.style.top = -(window.pageYOffset / 10)+'px';
        
    var prlx_lyr_8 = document.getElementById('prlx_lyr_8');
    prlx_lyr_8.style.top = -(window.pageYOffset / 2)+'px';
        
    var prlx_lyr_9 = document.getElementById('prlx_lyr_9');
    prlx_lyr_9.style.top = -(window.pageYOffset / 15)+'px';
        
    var prlx_lyr_10 = document.getElementById('prlx_lyr_10');
    prlx_lyr_10.style.top = -(window.pageYOffset / 9)+'px';
}

window.addEventListener("scroll", parallax, false);


});
