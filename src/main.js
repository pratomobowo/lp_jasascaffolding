import './style.css'
import '@fontsource/public-sans/300.css';
import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';
import '@fontsource/public-sans/800.css';
import '@fontsource/public-sans/900.css';
import 'material-symbols/outlined.css';

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('testimonial-slider');
    const leftBtn = document.getElementById('slide-left');
    const rightBtn = document.getElementById('slide-right');

    console.log('Carousel init:', { slider, leftBtn, rightBtn });

    if (slider && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            console.log('Slide left');
            slider.scrollBy({ left: -400, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            console.log('Slide right');
            slider.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }
});
