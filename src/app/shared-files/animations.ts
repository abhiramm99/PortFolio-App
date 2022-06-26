import { animate, style, transition, trigger } from '@angular/animations';

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
