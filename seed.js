
const mongoose = require('mongoose');
const Book = require('./models/book');
const Horror=require('./models/horror');
const Fantasy = require('./models/fantasy');
const Comedy = require('./models/comedy');
const Popular = require('./models/popular');
const Romance = require('./models/romance');
const Scientific = require('./models/scientific');

let horror=[
    {
        image:'/images/horror1.jpg',
        name:'Crime and Punishment',
        link:'https://drive.google.com/file/d/1xNrx3GemHNo_HjKZOQgzHm1EKTGpCbde/view?usp=sharing'
    },
    {
        image:'/images/horror6.jpg',
        name:'Memoirs of a Midget',
        link:'https://drive.google.com/file/d/1tpgwVjWm2T9XXj7FqARi0CaoI20Vgx8Y/view?usp=drive_link'
    },
    {
        image:'/images/horror8.jpg',
        name:'The Ladys Money',
        link:'https://drive.google.com/file/d/1xDLp0Vc7fLjak7L7VH9rA7BlgzI23S86/view?usp=sharing'
    },
    {
        image:'/images/horror11.jpg',
        name:'The Invisible Man',
        link:'https://drive.google.com/file/d/1wZsmiNo-u5CPlgHPGZJf3_KI1Z7Kii5a/view?usp=sharing'
    },
    {
        image:'/images/horror12.jpg',
        name:'The Great God Pan',
        link:'https://drive.google.com/file/d/1x7FkUxRYoEeRJHBv7LXadmBGX_bqBHIv/view?usp=sharing'
       
    },
    {
        image:'/images/horror13.jpg',
        name:'The Rector of Veilbye',
        link:'https://drive.google.com/file/d/1x5hA0iTt-FxQXoK_edBPzQqhk8gNvY67/view?usp=sharing'
       
    },
    {
        image:'/images/horror15.jpg',
        name:'Seatons Aunt',
        link:'https://drive.google.com/file/d/1xM2BonSbGQfq4cEWrb9_pzM-meNuEExI/view?usp=sharing'
       
    },
    {
        image:'/images/horror17.jpg',
        name:'The Safety Match',
        link:'https://drive.google.com/file/d/1wu35yJAETW4mX1fSlQ9Qv4uEOho8kJ5G/view?usp=sharing'
       
    },
    {
        image:'/images/horror18.jpg',
        name:'The Monkeys Paw',
        link:'https://drive.google.com/file/d/1xDo0CL5fyBXVNE3KtgY-ZvGJqz7-RGhv/view?usp=sharing'
       
    },
];
let comedy=[
    {
        image:'/images/comedy1.jpg',
        name:'The Suicide',
        link:'https://drive.google.com/file/d/1vMhYI5x3qZ0FtYXbe7FnOFq8otjd3_AJ/view?usp=sharing'
    },
    {
        image:'/images/comedy4.jpg',
        name:'Antic Hay',
        link:'https://drive.google.com/file/d/1vOhwsFtg2j1iejshma8Q5dt-3z3lePmG/view?usp=sharing'
    },
    {
        image:'/images/comedy6.jpg',
        name:'A Prefect\'s Uncle',
        link:'https://drive.google.com/file/d/1vSk7x46AcX18D5gH32T-Tz9oT3EOfZjo/view?usp=sharing'
    },
    {
        image:'/images/comedy7.jpg',
        name:'Three Men in a  Boat',
        link:'https://drive.google.com/file/d/1vLDyutPITU9-NUqzqcmkohJ2-jpVqBgs/view?usp=sharing'
    },
    {
        image:'/images/comedy8.jpg',
        name:'Man and Superman',
        link:'https://drive.google.com/file/d/1vSn80VBLWx_7YsR1tHb9Qn8xP6ogCKJI/view?usp=sharing'
       
    },
    {
        image:'/images/comedy9.jpg',
        name:'The Cat and the Canary',
        link:'https://drive.google.com/file/d/1vWSpiBRrCwtPACnoI8CuPNhq4k6XAsMt/view?usp=sharing'
       
    },
    {
        image:'/images/comedy2.jpg',
        name:'Gentlemen Prefer Blonds',
        link:'https://drive.google.com/file/d/1vRkDr_7qUzo0IhY2eqMqBZE1qlONXaIG/view?usp=sharing'
       
    },
    {
        image:'/images/comedy3.jpg',
        name:'My Man Jeevs',
        link:'https://drive.google.com/file/d/1vXAOg9Yz3ubrE-f91zbkxZ8OY4GrEEZv/view?usp=sharing'
       
    },
    {
        image:'/images/comedy5.jpg',
        name:'A Damsel in Distress',
        link:'https://drive.google.com/file/d/1vTPjLwmXxTra3ajgI6bb5oBh7lkT8vhQ/view?usp=sharing'
       
    },
];
let fantasy=[
    {
        image:'/images/fantasy1.jpg',
        name:'Bleak House',
        link:'https://drive.google.com/file/d/1wcSFrGZsIgkejFNnrNPMLeBJtP26OQrt/view?usp=sharing '
    },
    {
        image:'/images/fantasy2.jpg',
        name:'The Mysterious Island',
        link:'https://drive.google.com/file/d/1wPSVhVv3VAUdF6AKAx9xiHMwCPY8ANK1/view?usp=sharing'
    },
    {
        image:'/images/fantasy3.jpg',
        name:'A Journey to the Centre of the Earth',
        link:'https://drive.google.com/file/d/1wcertcHfKwrzgipTc8s_9HUY5oa9qzCb/view?usp=sharing'
    },
    {
        image:'/images/fantasy4.jpg',
        name:'Erewhon Or Over the Range',
        link:'https://drive.google.com/file/d/1ylWQNphG6ZnFXlc6GToNCq2uvFQw_Own/view?usp=drivesdk'
    },
    {
        image:'/images/fantasy5.jpg',
        name:'From  the Earth to the Moon',
        link:'https://drive.google.com/file/d/1wemryiJwyLomWcli3bD0h6h0YZvk7Gny/view?usp=sharing'
       
    },
    {
        image:'/images/fantasy6.jpg',
        name:'The Night Land',
        link:'https://drive.google.com/file/d/1wlbckhLWucCXrq2aaRaY8ep9RNxzlaDC/view?usp=sharing'
       
    },
    {
        image:'/images/fantasy7.jpg',
        name:'The Wonderful Wizard',
        link:'https://drive.google.com/file/d/1wRsmNqvCSIH3-5RJL3I9RSgT8tpOTjzm/view?usp=sharing'
       
    },
    {
        image:'/images/fantasy8.jpg',
        name:'The Wood Beyond the World',
        link:'https://drive.google.com/file/d/1wT-zxOJIKXFbUg5qDKgOP9qRJjVP3QQu/view?usp=sharing'
       
    },
    {
        image:'/images/fantasy10.jpg',
        name:'The Invisible Man',
        link:'https://drive.google.com/file/d/1wZsmiNo-u5CPlgHPGZJf3_KI1Z7Kii5a/view?usp=sharing'
       
    },
];
let popular=[
    {
        image:'/images/fantasy1.jpg',
        name:'Bleak House',
        link:'https://drive.google.com/file/d/1wcSFrGZsIgkejFNnrNPMLeBJtP26OQrt/view?usp=sharing'
    },
    {
        image:'/images/comedy6.jpg',
        name:'A Prefect\'s Uncle',
        link:'https://drive.google.com/file/d/1vSk7x46AcX18D5gH32T-Tz9oT3EOfZjo/view?usp=sharing'
    },
    {
        image:'/images/horror11.jpg',
        name:'The Invisible Man',
        link:'https://drive.google.com/file/d/1wZsmiNo-u5CPlgHPGZJf3_KI1Z7Kii5a/view?usp=sharing'
    },
    {
        image:'/images/romance3.jpg',
        name:'The Scarlet Letter',
        link:'https://drive.google.com/file/d/1zL9bizAvwyXcZHTGsAkD0HnYy4fLHZt2/view?usp=drivesdk '
    },
    {
        image:'/images/Sciencefic3.jpg',
        name:'A Princess of Mars',
        link:'https://drive.google.com/file/d/1w2NFe8oRJDFHlfIsROjBM1ZreqhrLwuB/view?usp=sharing'
       
    },
    {
        image:'/images/romance6.jpg',
        name:'Romeo and Juliet',
        link:'https://drive.google.com/file/d/1zQFlf11M8pR5XJpAHSYnfr76S4_sxUrs/view?usp=drivesdk '
       
    },
    {
        image:'/images/fantasy5.jpg',
        name:'From the Earth to the Moon',
        link:'https://drive.google.com/file/d/1wemryiJwyLomWcli3bD0h6h0YZvk7Gny/view?usp=sharing'
       
    },
    {
        image:'/images/horror17.jpg',
        name:'The Safety Match',
        link:'https://drive.google.com/file/d/1wu35yJAETW4mX1fSlQ9Qv4uEOho8kJ5G/view?usp=sharing'
       
    },
    {
        image:'/images/horror18.jpg',
        name:'The Monkeys Paw',
        link:'https://drive.google.com/file/d/1xDo0CL5fyBXVNE3KtgY-ZvGJqz7-RGhv/view?usp=sharing'
       
    },
];
let romance=[
    {
        image:'/images/romance1.jpg',
        name:'The Return of Native',
        link:'https://drive.google.com/file/d/1yoNpEzPFu3Qlz87B5gfSanUsLz06u3fn/view?usp=drivesdk '
    },
    {
        image:'/images/romance2.jpg',
        name:'The Age of Innocence',
        link:'https://drive.google.com/file/d/1yqoainQf7W514Id91K9-q16Xc-MCmIsT/view?usp=drivesdk '
    },
    {
        image:'/images/romance3.jpg',
        name:'The Scarlet Letter',
        link:'https://drive.google.com/file/d/1zL9bizAvwyXcZHTGsAkD0HnYy4fLHZt2/view?usp=drivesdk '
    },
    {
        image:'/images/romance4.jpg',
        name:'A Tale of Two Cities',
        link:'https://drive.google.com/file/d/1z9Vfe2cRUBuO6913ql8kkUkAZ-6X5zRs/view?usp=drivesdk '
    },
    {
        image:'/images/romance5.jpg',
        name:'The Sorrows of Young Werther',
        link:'https://drive.google.com/file/d/1zACvg1KZfFIZnIN3ZnGNYFxbft0m0dJh/view?usp=drivesdk '
       
    },
    {
        image:'/images/romance6.jpg',
        name:'Romeo and Juliet',
        link:'https://drive.google.com/file/d/1zQFlf11M8pR5XJpAHSYnfr76S4_sxUrs/view?usp=drivesdk '
       
    },
    {
        image:'/images/romance7.jpg',
        name:'Sentimental Education',
        link:'https://drive.google.com/file/d/1zL9bizAvwyXcZHTGsAkD0HnYy4fLHZt2/view?usp=drivesdk '
       
    },
    {
        image:'/images/romance8.jpg',
        name:'The House Of Mirth',
        link:'https://drive.google.com/file/d/1zGap5nLXCHC1ZIQzWxcNcVylOOHlvY_A/view?usp=drivesdk '
       
    },
    {
        image:'/images/romance9.jpg',
        name:'Letter from an Unknown Woman',
        link:'https://drive.google.com/file/d/1zFexWCXeiqOiUcMin6447vxf2Iq1fz_m/view?usp=drivesdk '
       
    },
];
let scientific=[
    {
        image:'/images/Sciencefic1.jpg',
        name:'A Voyage to the Moon',
        link:'https://drive.google.com/file/d/1wCf80ufdRqqulvgj73yvU31YVy-QLSMr/view?usp=sharing'
    },
    {
        image:'/images/Sciencefic2.jpg',
        name:'The Gods of Mars',
        link:'https://drive.google.com/file/d/1wD-XqnptEob9vv3OZ7ebi8jdaEbqdjGg/view?usp=sharing'
    },
    {
        image:'/images/Sciencefic8.jpeg',
        name:'The Food of the Gods and How It Came to Earth',
        link:'https://drive.google.com/file/d/1w4LxwZugh7WPxlQtgJQ_qmTtvtg0SZcx/view?usp=sharing'
    },
    {
        image:'/images/Sciencefic3.jpg',
        name:'A Princess of Mars',
        link:'https://drive.google.com/file/d/1w2NFe8oRJDFHlfIsROjBM1ZreqhrLwuB/view?usp=sharing'
    },
    {

        image:'/images/Sciencefic4.jpg',
        name:'The Monster Men',
        link:'https://drive.google.com/file/d/1vkATujD63-vquQdi-DOpBbhRuiPQonD2/view?usp=sharing'
       
    },
    {
        image:'/images/Sciencefic5.jpg',
        name:'The Land that Time Forgot',
        link:'https://drive.google.com/file/d/1vfByfJjvui8XSzh4KnZuy6JREdYiY-XD/view?usp=sharing'
       
    },
    {
        image:'/images/Sciencefic6.jpg',
        name:'New Atlantics',
        link:'https://drive.google.com/file/d/1w7z5u60tjh8WXbreNKn7jiy2cyJ1IWRa/view?usp=sharing'
       
    },
    {
        image:'/images/Sciencefic7.jpg',
        name:'In the Days of the Comet',
        link:'https://drive.google.com/file/d/1vwxOkgzBp8cO1epfil_UNYVwoJv1H6rm/view?usp=sharing'
       
    },
    {
        image:'/images/Sciencefic9.jpg',
        name:'The War in the Air',
        link:'https://drive.google.com/file/d/1wF4b4lILU3J-Mt8LKgGmX-5NrxNhoU0w/view?usp=sharing'
       
    },
];
Horror.create(horror)
    .then(()=>{console.log('documnet created!')})
Scientific.create(scientific)
    .then(()=>{console.log('documnet created!')})
Comedy.create(comedy)
    .then(()=>{console.log('documnet created!')})
Fantasy.create(fantasy)
    .then(()=>{console.log('documnet created!')})
Popular.create(popular)
    .then(()=>{console.log('documnet created!')})
Romance.create(romance)
    .then(()=>{console.log('documnet created!')})
