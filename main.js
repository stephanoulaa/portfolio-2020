$(document).ready(function() {

  console.log("Load 'em up!")

  var scrollTop = 0;

   $(window).scroll(function(){
//       $(window).animate({ scrollTop }, 'slow');
     scrollTop = $(window).scrollTop()
      //console.log(scrollTop)

     if (scrollTop >= 60) {
       $("#arrow").show()
     } else if (scrollTop < 60) {
       $("#arrow").hide()
     }

   })
})