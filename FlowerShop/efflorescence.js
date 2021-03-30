$(window).load(function() {
    $.fn.sakura({
        blowAnimations: [
            'blow-soft-left',
            ...
        ],                   // Horizontal movement animation names
        className: 'sakura', // Class name to use
        fallSpeed: 100,        // Factor for petal fall speed
        maxSize: 50,         // Maximum petal size
        minSize: 35,          // Minimum petal size
        newOn: 100,          // Interval after which a new petal is added
        swayAnimations: [    // Swaying animation names
            'sway-0',
            ...
        ]
    });
});
