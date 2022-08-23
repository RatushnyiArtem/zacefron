$(document).ready(function(){
    $('.photo4').hover(function(event){
        $('.photo4').addClass('active')
        $('.photo.active, .photo2.active, .photo1.active, .photo3.active').removeClass('active')
    });
});
$(document).ready(function(){
    $('.photo').hover(function(event){
        $('.photo').addClass('active')
        $('.photo4.active, .photo2.active, .photo1.active, .photo3.active').removeClass('active')
    });
});
$(document).ready(function(){
    $('.photo1').hover(function(event){
        $('.photo1').addClass('active')
        $('.photo4.active, .photo2.active, .photo.active, .photo3.active').removeClass('active')
    });
});
$(document).ready(function(){
    $('.photo2').hover(function(event){
        $('.photo2').addClass('active')
        $('.photo4.active, .photo1.active, .photo.active, .photo3.active').removeClass('active')
    });
});
$(document).ready(function(){
    $('.photo3').hover(function(event){
        $('.photo3').addClass('active')
        $('.photo4.active, .photo1.active, .photo.active, .photo2.active').removeClass('active')
    });
});
$(document).ready(function(){
    $('.checks').click(function(event){
        $('.checkboxing_ui').toggleClass('active')
    });
});
$(document).ready(function(){
    $('.email').click(function(event){
        $('.email').toggleClass('active')
    });
});
$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger, .burger_list').toggleClass('active')
    });
});
$(document).ready(function(){
    $('.scorp').click(function shutting(event){
        $('.burger, .burger_list').removeClass('active')
    });
});



// let main = document.getElementById('slidehunt');
// main.addEventListener('mousemove', starter)
// function starter(){
//     let Ind = 0;
//     showSlide()
//     function showSlide() {
//         let i;
//         let slide = document.getElementById('slide')
//         for(i = 0; i < slide.length; i++){
//             slide[i].style.display = 'none'
//         }
//         Ind++
//         if(Ind>slide.length){
//             Ind = 1
//         }
//         slide[Ind-1].style.display = 'block'
//         setTimeout(showSlide, 2000)
//     }
// }

let slides = document.querySelectorAll('[class*=slide_]')
let dots = document.querySelectorAll('.dot');

let index = 0;

// const activeSlide = n => {
//     for(slide of slides) {
//         slide.removeAttribute('active')
//     }
//     slides[n].setAttribute('active')
// }
const activeSlod = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}



const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        activeSlod(index);
        activeDot(index);
    }else{
        index++;
        activeSlod(index);
        activeDot(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlod(index);
        activeDot(index);
    })
})

setInterval(nextSlide, 5000);

// let liks = document.querySelectorAll('.mst')


// простой якорь
let anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(links => {
    links.addEventListener('click', function(e) {
        e.preventDefault()
        
        const href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = 98
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
}) 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log('entry.isIntersecting', entry.target.id)
            document.querySelectorAll('.mst').forEach((link) => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href').replace('#', '') === entry.target.id
                ) 
            })
        }
    })
}, {
    threshold: 0.7
});
document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section)
})  


const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight = animItemHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else {
                if(!animItem.classList.contains('_anim-no-hide'))
                animItem.classList.remove('active')
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    setTimeout(() => {
        animOnScroll();
    }, 500);
    
}