(function() {
    'use strict'
    $(function() {
      smoothScroll(300);
    });

    function smoothScroll (duration) {
    	$('a[href^="#"]').on('click', function(event) {

    	    var target = $( $(this).attr('href') );

    	    if( target.length ) {
    	        event.preventDefault();
    	        $('html, body').animate({
    	            scrollTop: target.offset().top
    	        }, duration);
    	    }
    	});
    }

    var scrollActive = {
        activeSection: 'about',
        init: function() {
            this.sections = document.getElementsByClassName("body-section");
            this.tabs = document.getElementsByClassName("tab");
            this.setActiveTab(0);
            this.setActiveIndex(0);
        },
        setActiveIndex: function(sectionIndex) {
            this.activeSectionIndex = sectionIndex;

        },
        getActiveIndex: function() {
            return this.activeSectionIndex;
        },
        setActiveTab: function(tabIndex) {
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].className = "tab";
            }
            this.tabs[tabIndex].className = "tab active";
        },
        checkForNewActive: function() {
            this.closest = Math.abs(this.sections[this.getActiveIndex()].getBoundingClientRect().top);
            this.distance = 0;
            for (var i = 0; i < this.sections.length; i++) {
                this.distance = Math.abs(this.sections[i].getBoundingClientRect().top);
                if (this.distance < this.closest) {
                    this.setActiveIndex(i);
                    this.setActiveTab(i);
                    this.closest = Math.abs(this.sections[this.getActiveIndex()].getBoundingClientRect().top);
                }
            }
        },

    };


    scrollActive.init();

    $(window).scroll(function() {
        scrollActive.checkForNewActive();
    });
})();
