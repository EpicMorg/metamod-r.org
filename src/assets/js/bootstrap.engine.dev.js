////////////////////////////
// Sorry for my bad code. //
////////////////////////////

$(document).ready(function(){
//////////////////
// Native js
/////////////////

// Loader init 
    function fadeOutnojquery(el) {
        el.style.opacity = 1;
        var interhellopreloader = setInterval(function() {
            el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <= 0.05) {
                clearInterval(interhellopreloader);
                hellopreloader.style.display = "none";  
            }
        }, 16);
    }
    window.onload = function() { 
        setTimeout(function() {
            fadeOutnojquery(hellopreloader);
        }, 1000);  
    };

//////////////////
// jQuery js:
//////////////////

    $( "#metaheader" ).click(function() {
        $('#metaheader').addClass('animated hinge');
        $('#metaheader').animateCSS('hinge', 2000, function() {
              // Animation complete!
              $('#metaheader').addClass("fadeIn");
              $('#metaheader').removeClass("hinge");
              $('#metaheader').removeClass("animated");
        });
    }); 
    $( "#whatisit" ).click(function() {
        $('#whatisit').addClass('animated flip');
        $('#whatisit').animateCSS('flip', 1000, function() {
              // Animation complete!
              $('#whatisit').removeClass("animated");
              $('#whatisit').removeClass("flip");
        });
    }); 
    $( "#clickme-trigger" ).click(function() { 
        var arr = [
          "/assets/img/sparks/01.svg",
          "/assets/img/sparks/02.svg",
          "/assets/img/sparks/03.svg",
          "/assets/img/sparks/04.svg",
          "/assets/img/sparks/05.svg",
          "/assets/img/sparks/06.svg"];
        var rand = Math.floor(Math.random() * arr.length);
        $('#aenimka-the-unicorn').attr('src', arr[rand]);  
        $('.aenimka-the-unicorn').removeClass("hidden");
        $('.aenimka-the-unicorn').addClass('animated zoomIn');
        $('.aenimka-the-unicorn').animateCSS('zoomIn', 2000, function() {

          // Animation complete!
          $('.aenimka-the-unicorn').addClass('animated zoomOut');
          $('.aenimka-the-unicorn').animateCSS('zoomOut', 1000, function() {
              // Animation complete!
              $('.aenimka-the-unicorn').addClass("hidden");
              $('.aenimka-the-unicorn').removeClass("animated");
              $('.aenimka-the-unicorn').removeClass("zoomOut");
              $('.aenimka-the-unicorn').removeClass("zoomIn");
          });
       });
    });
});
 