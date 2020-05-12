$(document).ready(function(){
    // Code for Main Slider
    $('.covid-banner-image').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        autoplay:true,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:0,
        nav:false,
        navDots:false,
        lazyLoad:true,
        center:true,
        // responsive:{
        //     480:{
        //         items:1
        //     },
        //     600:{
        //         items:1
        //     }
        // }
    });

    // Code for Main Slider
    $('.awareness-slider').owlCarousel({
        items:4,
        merge:true,
        loop:true,
        autoplay:true,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:15,
        nav:true,
        navDots:false,
        lazyLoad:true,
        center:false,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });


    //Code for sticky menu
    var x = $('.header-main').offset().top; 
    
    $(window).scroll(function(){
        var y = $(window).scrollTop();
        
        if(y>x){
            $('.header-main').addClass('sticky');
           }else{
            $('.header-main').removeClass('sticky');
           }
    });
    $('.header-main').wrapAll('<div class="cover">');
    $('.cover').css('min-height', $('.header-main').outerHeight());
    $('.cover').css('height', 'auto');


    // Wow Animation
    new WOW().init();



    //jQuery Code for back to top
    $(window).scroll(function(){    
        var wScroll = $(this).scrollTop();

        var showScrollButton = 5;

        if(wScroll > showScrollButton){
            $('#top').fadeIn();  
        }else{
            $('#top').fadeOut();
        }

    });


    //creating click function for back to top
    $('#top').click(function(){
        $('body, html').animate({
           scrollTop:0 
        }, 2000);
        return false;
    });
    


    // Video popup code
    $('.video-link').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1',
                },
            },
            srcAction: 'iframe_src',
        },
    });



        // education calendar event list
        myEvents = [
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/18/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/19/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/20/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/21/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/22/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/23/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/24/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/25/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/26/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/27/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/28/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/29/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/30/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "March/31/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/1/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/2/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/3/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/4/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/5/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/6/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/7/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/8/2020", type: "event" },
            { name: "Course No: MPH-522", coursename: "Name of Course: Epidemiology", credit: "Credits: 3", date: "April/9/2020", type: "event" },

            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/12/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/13/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/14/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/15/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/16/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/17/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/18/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/19/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/20/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/21/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/22/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/23/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/24/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/25/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/26/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/27/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/28/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/29/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "April/30/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "May/1/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "May/2/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "May/3/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "May/4/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "May/5/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "May/6/2020", type: "event" },
            { name: "Course No: MPH-521", coursename: "Name of Course: Biostatistics", credit: "Credits: 3", date: "May/7/2020", type: "event" },

            { name: " ", coursename: "Name of Course: Methodology Workshop", credit: " ", date: "May/10/2020", type: "event" },
            { name: " ", coursename: "Name of Course: Methodology Workshop", credit: " ", date: "May/11/2020", type: "event" },
            { name: " ", coursename: "Name of Course: Methodology Workshop", credit: " ", date: "May/12/2020", type: "event" },
            { name: " ", coursename: "Name of Course: Methodology Workshop", credit: " ", date: "May/13/2020", type: "event" },
            { name: " ", coursename: "Name of Course: Methodology Workshop", credit: " ", date: "May/14/2020", type: "event" },
            
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: "Credits: 3 ", date: "May/16/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: "Credits: 3 ", date: "May/17/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: "Credits: 3 ", date: "May/18/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: "Credits: 3 ", date: "May/19/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: "Credits: 3 ", date: "May/20/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: "Credits: 3 ", date: "May/21/2020", type: "event" },
            
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/22/2020", type: "holiday" },
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/23/2020", type: "holiday" },
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/24/2020", type: "holiday" },
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/25/2020", type: "holiday" },
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/26/2020", type: "holiday" },
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/27/2020", type: "holiday" },
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/28/2020", type: "holiday" },
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/29/2020", type: "holiday" },
            { name: "Holiday", coursename: "Academic Vacation (Eid-ul-Fitr)", credit: " ", date: "May/30/2020", type: "holiday" },
        
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: " ", date: "May/31/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: " ", date: "June/1/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: " ", date: "June/2/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: " ", date: "June/3/2020", type: "event" },
            { name: "Course No: MPH-520", coursename: "Name of Course: Quantitative Research Methods", credit: " ", date: "June/4/2020", type: "event" },
            
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/7/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/8/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/9/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/10/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/11/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/12/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/13/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/14/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/15/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/16/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/17/2020", type: "event" },
            { name: "Course No: MPH-531", coursename: "Name of Course: Health Economics & Health Care Financing ", credit: " 2", date: "June/18/2020", type: "event" },
        ],


        $('#evoCalendar').evoCalendar({
            calendarEvents: myEvents,
            canAddEvent:false,
            eventListToggler:false,

        });






    // Code for Main Slider
    $('.research-brief-slider').owlCarousel({
        merge:true,
        loop:true,
        autoplay:true,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:20,
        nav:true,
        navDots:true,
        lazyLoad:true,
        responsive:{
            300:{
                items:1
            },
            480:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });






    // Code for Main Slider
    $('.internal-blog').owlCarousel({
        merge:true,
        loop:true,
        autoplay:true,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:10,
        nav:true,
        navDots:true,
        lazyLoad:true,
        responsive:{
            300:{
                items:1
            },
            480:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });






    // Code for Main Slider
    $('.external-blog').owlCarousel({
        merge:true,
        loop:true,
        autoplay:true,
        autoplaySpeed:2000,
        autoplayTimeout:15000,
        smartSpeed:500,
        margin:10,
        nav:true,
        navDots:true,
        lazyLoad:true,
        responsive:{
            300:{
                items:1
            },
            480:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });



    $('.show-details').click(function(){
        $(this).siblings('.course-details').slideToggle();
    });



    $('.show-webinar').click(function(){
        $(this).siblings('.webinar-details').slideToggle();
    });


	
	
	
	







});