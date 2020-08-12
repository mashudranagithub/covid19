$(document).ready(function(){
    // Code for Main Slider
    $('.covid-banner-image').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        autoplay:false,
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
        autoplay:false,
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


            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/21/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/22/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/23/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/24/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/25/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/26/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/27/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/28/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/29/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "June/30/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/01/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/02/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/03/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/04/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/05/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/06/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/07/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/08/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Name of Course: Health Systems Management", credit: "Credit - 5", date: "July/09/2020", type: "event" },

            { name: "Course No: MPH-530", coursename: "Health Systems Management Experiential Learning", credit: " ", date: "July/12/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Health Systems Management Experiential Learning", credit: " ", date: "July/13/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Health Systems Management Experiential Learning", credit: " ", date: "July/14/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Health Systems Management Experiential Learning", credit: " ", date: "July/15/2020", type: "event" },
            { name: "Course No: MPH-530", coursename: "Health Systems Management Experiential Learning", credit: " ", date: "July/16/2020", type: "event" },

            { name: "Course No: MPH-691", coursename: "Monitoring and Evaluation of PH Programmes", credit: "Credit - 1", date: "July/19/2020", type: "event" },
            { name: "Course No: MPH-691", coursename: "Monitoring and Evaluation of PH Programmes", credit: "Credit - 1", date: "July/20/2020", type: "event" },
            { name: "Course No: MPH-691", coursename: "Monitoring and Evaluation of PH Programmes", credit: "Credit - 1", date: "July/21/2020", type: "event" },
            { name: "Course No: MPH-691", coursename: "Monitoring and Evaluation of PH Programmes", credit: "Credit - 1", date: "July/22/2020", type: "event" },
            { name: "Course No: MPH-691", coursename: "Monitoring and Evaluation of PH Programmes", credit: "Credit - 1", date: "July/23/2020", type: "event" },

            { name: " ", coursename: "Introduction to Implementation Research", credit: " ", date: "July/26/2020", type: "event" },
            { name: " ", coursename: "Introduction to Implementation Research", credit: " ", date: "July/27/2020", type: "event" },
            { name: " ", coursename: "Introduction to Implementation Research", credit: " ", date: "July/28/2020", type: "event" },
            { name: " ", coursename: "Introduction to Implementation Research", credit: " ", date: "July/29/2020", type: "event" },
            { name: " ", coursename: "Introduction to Implementation Research", credit: " ", date: "July/30/2020", type: "event" },

            { name: " ", coursename: "Academic Vacation (Eid-ul- Adha)", credit: " ", date: "July/31/2020", type: "event" },
            { name: " ", coursename: "Academic Vacation (Eid-ul- Adha)", credit: " ", date: "August/01/2020", type: "event" },
            { name: " ", coursename: "Academic Vacation (Eid-ul- Adha)", credit: " ", date: "August/02/2020", type: "event" },
            { name: " ", coursename: "Academic Vacation (Eid-ul- Adha)", credit: " ", date: "August/03/2020", type: "event" },
            { name: " ", coursename: "Academic Vacation (Eid-ul- Adha)", credit: " ", date: "August/04/2020", type: "event" },
            { name: " ", coursename: "Academic Vacation (Eid-ul- Adha)", credit: " ", date: "August/05/2020", type: "event" },
            { name: " ", coursename: "Academic Vacation (Eid-ul- Adha)", credit: " ", date: "August/06/2020", type: "event" },

            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/09/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/10/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/11/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/12/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/13/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/14/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/15/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/16/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/17/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/18/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/19/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/20/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/21/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/22/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/23/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/24/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/25/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/26/2020", type: "event" },
            { name: "Course No: MPH-620 ", coursename: "Epidemiology of Infectious Diseases", credit: "Credit - 3", date: "August/27/2020", type: "event" },

            { name: "Course No: MPH-690", coursename: "Principles of Health Communication", credit: "Credit - 1", date: "August/30/2020", type: "event" },
            { name: "Course No: MPH-690", coursename: "Principles of Health Communication", credit: "Credit - 1", date: "August/31/2020", type: "event" },
            { name: "Course No: MPH-690", coursename: "Principles of Health Communication", credit: "Credit - 1", date: "September/01/2020", type: "event" },
            { name: "Course No: MPH-690", coursename: "Principles of Health Communication", credit: "Credit - 1", date: "September/02/2020", type: "event" },
            { name: "Course No: MPH-690", coursename: "Principles of Health Communication", credit: "Credit - 1", date: "September/03/2020", type: "event" },

            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/06/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/07/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/08/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/09/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/10/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/11/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/12/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/13/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/14/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/15/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/16/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Gender, Sexual and Reproductive Health & Rights", credit: "Credit - 2", date: "September/17/2020", type: "event" },


            { name: "Course No: MPH-660", coursename: "Government Programme Management Learning (GPML-2) Experiential Learning", credit: "Credit - 2", date: "September/17/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Government Programme Management Learning (GPML-2) Experiential Learning", credit: "Credit - 2", date: "September/18/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Government Programme Management Learning (GPML-2) Experiential Learning", credit: "Credit - 2", date: "September/19/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Government Programme Management Learning (GPML-2) Experiential Learning", credit: "Credit - 2", date: "September/20/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Government Programme Management Learning (GPML-2) Experiential Learning", credit: "Credit - 2", date: "September/21/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Government Programme Management Learning (GPML-2) Experiential Learning", credit: "Credit - 2", date: "September/22/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Government Programme Management Learning (GPML-2) Experiential Learning", credit: "Credit - 2", date: "September/23/2020", type: "event" },
            { name: "Course No: MPH-660", coursename: "Government Programme Management Learning (GPML-2) Experiential Learning", credit: "Credit - 2", date: "September/24/2020", type: "event" },

            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "September/27/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "September/28/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "September/29/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "September/30/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "October/01/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "October/02/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "October/03/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "October/04/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "October/05/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "October/06/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "October/07/2020", type: "event" },
            { name: "Course No: MPH-670", coursename: " Public Health Nutrition", credit: "Credit - 2", date: "October/08/2020", type: "event" },

            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/11/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/12/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/13/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/14/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/15/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/16/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/17/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/18/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/19/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/20/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/21/2020", type: "event" },
            { name: "Course No: MPH-681", coursename: "Ageing and Health", credit: "Credit - 2", date: "October/22/2020", type: "event" },

            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "October/25/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "October/26/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "October/27/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "October/28/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "October/29/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "October/30/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "October/31/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "Noverber/01/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "Noverber/02/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "Noverber/03/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "Noverber/04/2020", type: "event" },
            { name: "Course No: MPH-541", coursename: "Environment, Health and Climate Change", credit: "Credit - 3", date: "Noverber/05/2020", type: "event" },

            { name: "Course No: MPH-700", coursename: "Summative Learning Project (SLP) Methodology Workshop", credit: "Credit - 14", date: "Noverber/08/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "Summative Learning Project (SLP) Methodology Workshop", credit: "Credit - 14", date: "Noverber/09/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "Summative Learning Project (SLP) Methodology Workshop", credit: "Credit - 14", date: "Noverber/10/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "Summative Learning Project (SLP) Methodology Workshop", credit: "Credit - 14", date: "Noverber/11/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "Summative Learning Project (SLP) Methodology Workshop", credit: "Credit - 14", date: "Noverber/12/2020", type: "event" },

            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/14/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/15/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/16/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/17/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/18/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/19/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/20/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/21/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/22/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/23/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/24/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/25/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/26/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/27/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/28/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/29/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "Noverber/30/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/01/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/02/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/03/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/04/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/05/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/06/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/07/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/08/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/09/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/10/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/11/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/12/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/13/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/14/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/15/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/16/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/17/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/18/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/19/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/20/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/21/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/22/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/23/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/24/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/25/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/26/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/27/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/28/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/29/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/30/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "December/31/2020", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/01/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/02/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/03/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/04/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/05/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/06/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/07/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/08/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/09/2021", type: "event" },
            { name: "Course No: MPH-700", coursename: "SLP Data Collection, Analysis and Report Writing", credit: "Credit - 14", date: "January/10/2021", type: "event" },

            { name: "Course No: MPH-700", coursename: "SLP Submission", credit: "Credit - 14", date: "January/11/2021", type: "event" },

            { name: " ", coursename: "Graduation Ceremony", credit: " ", date: "January/21/2021", type: "event" },
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
        autoplay:false,
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
        autoplay:false,
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
        autoplay:false,
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
        $(this).parent('li').siblings('.webinar-details').slideToggle();
    });


	

});