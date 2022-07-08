import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const fadeInFromTop = trigger('fadeInFromTop', [
    transition(':enter', [
        style({transform: 'translateY(-10px)', opacity: 0}),
        animate(500)
    ])
]);

export const fadeInFromLeft = trigger('fadeInFromLeft', [
    transition(':enter', [
        style({transform: 'translateX(-10px)', opacity: 0}),
        animate(500)
    ])
]);

export const fadeInFromRight = trigger('fadeInFromRight', [
    transition(':enter', [
        style({transform: 'translateX(10px)', opacity: 0}),
        animate(500)
    ])
]);

export const fadeInFromBottom = trigger('fadeInFromBottom', [
    transition(':enter', [
        style({transform: 'translateY(10px)', opacity: 0}),
        animate(500)
    ])
]);

export const fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({opacity: 0}),
        animate(250)
    ])
]);

export const fadeOut = trigger('fadeOut', [
    transition(':leave', [
        style({opacity: 1}),
        animate(250, style({opacity: 0}))
    ])
])

export const popIn = trigger('popIn', [
    transition(':enter', [
        animate(200, keyframes([
            style({transform: 'scale(0)', offset: 0}),
            style({transform: 'scale(1.4)', offset: 0.8}),
            style({transform: 'scale(1)', offset: 1})
        ]))
    ])
])
