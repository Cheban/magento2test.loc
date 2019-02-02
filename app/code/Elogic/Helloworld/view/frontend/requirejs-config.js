var config = {
    paths: {
        'slick': "Elogic_Helloworld/js/slick.min"
    },
    map: {
        '*': {
            slickSlider: 'Elogic_Helloworld/js/slick-slider'
        }
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    },
};