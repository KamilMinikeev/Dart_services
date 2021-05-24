$(function() {
          /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos,introH);
    
    $(window).on("scroll resize", function() {
        let scrollPos = $(window).scrollTop();
        let introH = intro.innerHeight();
        checkScroll(scrollPos,introH);

    })

    function checkScroll(scrollPos,introH) {
        let nav = $("#nav");
        let navToggle = $("#navToggle");

        if (scrollPos > introH) {
            header.addClass("fixed");
            nav.addClass("fixed");
            navToggle.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
            nav.removeClass("fixed");
            navToggle.removeClass("fixed");
        }

    }

           /*SmothScroll*/
        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();

            let ScrollId = $(this).data("scroll");
            let elementOffSet = $(ScrollId).offset().top;

            let navToggle = $("#navToggle");
            let nav = $("#nav");
            navToggle.removeClass("active");
            nav.removeClass("active");

            $("html,bode").animate({
                scrollTop: elementOffSet
            },1000);

        })

        /*Nav-Toggle*/
        let nav = $("#nav");
        let navToggle = $("#navToggle");
        navToggle.on("click", function() {
            navToggle.toggleClass("active");
            nav.toggleClass("active");
        })

        /*ActiveClick*/
    let AboutClick = $("#AboutClick");
    let ServiceClick = $("#ServiceClick");
    let ProjectsClick = $("#ProjectsClick");
    let HomeClick = $("#HomeClick");
    
    $(HomeClick).on("click", function(event) {
        $(this).addClass("active");
        ServiceClick.removeClass("active");
        $(ProjectsClick).removeClass("active");
        $(AboutClick).removeClass("active");
        
    })
    
    $(ServiceClick).on("click", function(event) {
        $(this).addClass("active");
        $(AboutClick).removeClass("active");
        $(ProjectsClick).removeClass("active");
        $(HomeClick).removeClass("active");
        
    })
    
    $(AboutClick).on("click", function(event) {
        $(this).addClass("active");
        $(ServiceClick).removeClass("active");
        $(ProjectsClick).removeClass("active");
        $(HomeClick).removeClass("active");
        
    })
    
    $(ProjectsClick).on("click", function(event) {
        $(this).addClass("active");
        $(ServiceClick).removeClass("active");
        $(HomeClick).removeClass("active");
        $(AboutClick).removeClass("active");
        
    })
    
    
          /*ActiveScroll*/
    let about = $("#about");
    let service = $("#service");
    let home = $("#home");
    let projects = $("#projects");
    
    $(window).on("scroll resize", function() {
        let scrollPos = $(window).scrollTop();
        
        let aboutOffSet = $(about).offset().top;
        let serviceOffSet = $(service).offset().top;
        let homeOffSet = $(home).offset().top;
        let projectsOffSet = $(projects).offset().top;
       
        
        
        let aboutH = about.innerHeight();
        let serviceH = service.innerHeight();
        let homeH = home.innerHeight();
        let projectsH = projects.innerHeight();
        
        
        
        if (scrollPos > aboutOffSet - 200 && scrollPos < aboutOffSet + aboutH - 150) {
            AboutClick.addClass("active");
        }
        else {
            AboutClick.removeClass("active");
        }
        
        if (scrollPos > serviceOffSet -300 && scrollPos < serviceOffSet  + serviceH - 100) {
            ServiceClick.addClass("active");
        }
        else {
            ServiceClick.removeClass("active");
        }
        
        if (scrollPos > homeOffSet && scrollPos < homeOffSet + homeH ) {
            HomeClick.addClass("active");
        }
        else {
            HomeClick.removeClass("active");
        }
        
        if (scrollPos > projectsOffSet -250 && scrollPos < projectsOffSet + projectsH - 100 ) {
            ProjectsClick.addClass("active");
        }
        else {
            ProjectsClick.removeClass("active");
        }
        
        
    
    })

    
          /*Accordion*/
    $(".accordion_item").on("click", function() {
        $(this).toggleClass("active");
    })
    $("[data-collapse]").on("click", function() {
        let BlockId = $(this).data("collapse");
        $(BlockId).slideToggle();
    })

    /*Slider-slick*/
    $(".about_slider").slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
    })


})

                /*Team Slider*/
let imgLine = document.getElementById('img_slider_line');
let contentLine = document.getElementById('content_slider_line');
let img1 = document.getElementById('slide_img1');
let img2 = document.getElementById('slide_img2');
let img3 = document.getElementById('slide_img3');
let img4 = document.getElementById('slide_img4');
let img5 = document.getElementById('slide_img5');
let img6 = document.getElementById('slide_img6');

globalSlider();
function globalSlider() {
    let slideImg = 660;
    let slideContent = 660;

    img3.onclick = SliderLeftOne;
    function SliderLeftOne() {
        slideImg = slideImg - 660;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent - 660;
        contentLine.style.left = slideContent + 'px';
        console.log(slideImg);

        
        
}

    img1.onclick = SliderRightOne;
    function SliderRightOne() {
        slideImg = slideImg - 660;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent - 660;
        contentLine.style.left = slideContent + 'px';

        slideImg = slideImg + 1320;
        slideContent = slideContent + 1320;

        
        console.log(slideImg);
        
}

    img4.onclick = SliderLeftTwo;
    function SliderLeftTwo() {
            slideImg = slideImg - 1980;
            imgLine.style.left = slideImg + 'px';

            slideContent = slideContent - 1980;
            contentLine.style.left = slideContent + 'px';
            console.log(slideImg);
}
    img2.onclick = SliderLeftThree;
    function SliderLeftThree() {
        slideImg = slideImg - 1320;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent - 1320;
        contentLine.style.left = slideContent + 'px';
        console.log(slideImg);
    }

    img5.onclick = SlderRightTwo;
    function SlderRightTwo() {
        slideImg = slideImg + 660;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent + 660;
        contentLine.style.left = slideContent + 'px';

        slideImg = slideImg + 1320;
        slideContent = slideContent + 1320;

        console.log(slideImg);
    }

    img6.onclick = SlderRightThree;
    function SlderRightThree() {
        slideImg = slideImg + 1320;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent + 1320;
        contentLine.style.left = slideContent + 'px';
        console.log(slideImg);
    }

    

}
           /*Team Slider for XR*/
    let windowWidth = $("body").innerWidth();
    if (windowWidth < 480 & windowWidth > 350) {
    globalSlider2();
    function globalSlider2() {
    let slideImg = 380;
    let slideContent = 380;

    img3.onclick = SliderLeftOneNew;
    function SliderLeftOneNew() {
        slideImg = slideImg - 380;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent - 380;
        contentLine.style.left = slideContent + 'px';
        console.log(slideImg);

        
        
}

    img1.onclick = SliderRightOneNew;
    function SliderRightOneNew() {
        slideImg = slideImg - 380;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent - 380;
        contentLine.style.left = slideContent + 'px';

        slideImg = slideImg + 760;
        slideContent = slideContent + 760;

        
        console.log(slideImg);
        
}

    img4.onclick = SliderLeftTwoNew;
    function SliderLeftTwoNew() {
            slideImg = slideImg - 1140;
            imgLine.style.left = slideImg + 'px';

            slideContent = slideContent - 1140;
            contentLine.style.left = slideContent + 'px';
            console.log(slideImg);
}
    img2.onclick = SliderLeftThreeNew;
    function SliderLeftThreeNew() {
        slideImg = slideImg - 760;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent - 760;
        contentLine.style.left = slideContent + 'px';
        console.log(slideImg);
    }

    img5.onclick = SlderRightTwoNew;
    function SlderRightTwoNew() {
        slideImg = slideImg + 380;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent + 380;
        contentLine.style.left = slideContent + 'px';

        slideImg = slideImg + 760;
        slideContent = slideContent + 760;

        console.log(slideImg);
    }

    img6.onclick = SlderRightThreeNew;
    function SlderRightThreeNew() {
        slideImg = slideImg + 760;
        imgLine.style.left = slideImg + 'px';

        slideContent = slideContent + 760;
        contentLine.style.left = slideContent + 'px';
        console.log(slideImg);
    }

    

}
    }
          /*Team Slider for SE*/
     if (windowWidth < 350 & windowWidth > 290) {
     globalSlider3();
     function globalSlider3() {
     let slideImg = 300;
     let slideContent = 300;
 
     img3.onclick = SliderLeftOneNew1;
     function SliderLeftOneNew1() {
         slideImg = slideImg - 300;
         imgLine.style.left = slideImg + 'px';
 
         slideContent = slideContent - 300;
         contentLine.style.left = slideContent + 'px';
         console.log(slideImg);
  
 }
 
     img1.onclick = SliderRightOneNew1;
     function SliderRightOneNew1() {
         slideImg = slideImg - 300;
         imgLine.style.left = slideImg + 'px';
 
         slideContent = slideContent - 300;
         contentLine.style.left = slideContent + 'px';
 
         slideImg = slideImg + 600;
         slideContent = slideContent + 600;
 
         
         console.log(slideImg);
         
 }
 
     img4.onclick = SliderLeftTwoNew1;
     function SliderLeftTwoNew1() {
             slideImg = slideImg - 900;
             imgLine.style.left = slideImg + 'px';
 
             slideContent = slideContent - 900;
             contentLine.style.left = slideContent + 'px';
             console.log(slideImg);
 }
     img2.onclick = SliderLeftThreeNew1;
     function SliderLeftThreeNew1() {
         slideImg = slideImg - 600;
         imgLine.style.left = slideImg + 'px';
 
         slideContent = slideContent - 600;
         contentLine.style.left = slideContent + 'px';
         console.log(slideImg);
     }
 
     img5.onclick = SlderRightTwoNew1;
     function SlderRightTwoNew1() {
         slideImg = slideImg + 300;
         imgLine.style.left = slideImg + 'px';
 
         slideContent = slideContent + 300;
         contentLine.style.left = slideContent + 'px';
 
         slideImg = slideImg + 600;
         slideContent = slideContent + 600;
 
         console.log(slideImg);
     }
 
     img6.onclick = SlderRightThreeNew1;
     function SlderRightThreeNew1() {
         slideImg = slideImg + 600;
         imgLine.style.left = slideImg + 'px';
 
         slideContent = slideContent + 600;
         contentLine.style.left = slideContent + 'px';
         console.log(slideImg);
     }
 
 }
 
     }

