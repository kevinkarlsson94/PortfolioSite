$(function() {
  setBindings();
});

function setBindings(){
    $("nav a").click(function(e){
        e.oreventDefault;
        var sectionID = e.currentTarget.id + "Section";
       
        $("html body").animate({
           scrollTop : $("#" + sectionID).offset().top-250
        },1000);
        
    });
}