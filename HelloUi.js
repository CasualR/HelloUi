
"use strict"

// burger

const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header_menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// touchscreen or pc

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

// if (isMobile.any()) {
//     document.body.classList.add('_touch');
// } else {
//     document.body.classList.add('_pc');
// }

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

window.addEventListener("resize", function () {
    document.body.classList.remove('_touch', '_pc');
    if (isMobile.any()) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    }
});

// parallax

if (document.body.classList.contains('_pc')) {

    var scene1 = document.getElementById('scene1');
    var parallaxInstance1 = new Parallax(scene1);
    parallaxInstance1.friction(0.3, 0.4);
    parallaxInstance1.scalar(-5, 3);

    parallaxInstance1.limit(false, false);


    var scene2 = document.getElementById('scene2');
    var parallaxInstance2 = new Parallax(scene2);
    parallaxInstance2.friction(0.3, 0.4);
    parallaxInstance2.scalar(-6, 3);

    parallaxInstance2.limit(false, false);


    var scene3 = document.getElementById('scene3');
    var parallaxInstance3 = new Parallax(scene3);
    parallaxInstance3.friction(0.1, 0.7);
    parallaxInstance3.scalar(9, 4);

    parallaxInstance3.limit(false, false);


    var scene4 = document.getElementById('scene4');
    var parallaxInstance4 = new Parallax(scene4);
    parallaxInstance4.friction(0.5, 0.2);
    parallaxInstance4.scalar(7, -5);

    parallaxInstance4.limit(false, false);


    var scene5 = document.getElementById('scene5');
    var parallaxInstance5 = new Parallax(scene5);
    parallaxInstance5.friction(0.5, 0.3);
    parallaxInstance5.scalar(-2, 6);

    parallaxInstance5.limit(false, false);


    var scene6 = document.getElementById('scene6');
    var parallaxInstance6 = new Parallax(scene6);
    parallaxInstance6.friction(0.5, 0.3);
    parallaxInstance6.scalar(-2, 6);

    parallaxInstance5.limit(false, false);


    var scene7 = document.getElementById('scene7');
    var parallaxInstance7 = new Parallax(scene7);
    parallaxInstance7.friction(0.5, 0.2);
    parallaxInstance7.scalar(7, -5);

    parallaxInstance7.limit(false, false);


    var scene8 = document.getElementById('scene8');
    var parallaxInstance8 = new Parallax(scene8);
    parallaxInstance8.friction(0.1, 0.7);
    parallaxInstance8.scalar(9, 4);

    parallaxInstance5.limit(false, false);


    var scene9 = document.getElementById('scene9');
    var parallaxInstance9 = new Parallax(scene9);
    parallaxInstance9.friction(0.3, 0.4);
    parallaxInstance9.scalar(-6, 3);

    parallaxInstance9.limit(false, false);


    var scene10 = document.getElementById('scene10');
    var parallaxInstance10 = new Parallax(scene10);
    parallaxInstance10.friction(0.3, 0.4);
    parallaxInstance10.scalar(-5, 3);

    parallaxInstance10.limit(false, false);


    var scene11 = document.getElementById('scene11');
    var parallaxInstance11 = new Parallax(scene11);
    parallaxInstance11.friction(0.2, 0.3);
    parallaxInstance11.scalar(2, -4);

    parallaxInstance11.limit(false, false);


    var scene12 = document.getElementById('scene12');
    var parallaxInstance12 = new Parallax(scene12);
    parallaxInstance12.friction(0.3, 0.4);
    parallaxInstance12.scalar(-4, 2);

    parallaxInstance12.limit(false, false);


    var scene13 = document.getElementById('scene13');
    var parallaxInstance13 = new Parallax(scene13);
    parallaxInstance13.friction(0.5, 0.2);
    parallaxInstance13.scalar(-3, 3);

    parallaxInstance13.limit(false, false);


    var scene14 = document.getElementById('scene14');
    var parallaxInstance14 = new Parallax(scene14);
    parallaxInstance14.friction(0.6, 0.3);
    parallaxInstance14.scalar(5, -4);

    parallaxInstance14.limit(false, false);


    var scene15 = document.getElementById('scene15');
    var parallaxInstance15 = new Parallax(scene15);
    parallaxInstance15.friction(0.4, 0.4);
    parallaxInstance15.scalar(3, -3);

    parallaxInstance15.limit(false, false);

}