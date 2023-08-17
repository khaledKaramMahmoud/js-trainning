let imgs = Array.from(document.getElementsByClassName('img-item'));
let light_box = document.querySelector('.light_box');
let lb_item = document.querySelector('.lb_item');
let current_indx;
let LeftArrow = document.getElementById('LeftArrow');
let rightArrow = document.getElementById('rightArrow');
let close = document.getElementById('close');

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
            light_box.classList.replace('d-none','d-flex');

            let imgSrc=e.target.getAttribute('src');
            lb_item.style.backgroundImage = `url(${imgSrc})`;

            current_indx=imgs.indexOf(e.target)
        })
}

function slide(i){
    current_indx = current_indx + i;

    if(current_indx==imgs.length){
            current_indx=0;
        }

    if(current_indx<0){
            current_indx=imgs.length-1;
        }

    let imgSource=imgs[current_indx].getAttribute('src');
    lb_item.style.backgroundImage = `url(${imgSource})`;
}

function closeSlider(){
    light_box.classList.replace('d-flex','d-none');
}

rightArrow.addEventListener('click',function(){slide(1)})
LeftArrow.addEventListener('click',function(){slide(-1)})
close.addEventListener('click',closeSlider)

document.addEventListener('keydown',function(e){
    if(e.key=='ArrowLeft'){
        slide(-1)
    }
    else if(e.key=='ArrowRight'){
            slide(1)
        }
    else if(e.key=='Escape'){
        closeSlider()
    }
})

// function nextSlide(){
//     current_indx++;
//     if(current_indx==imgs.length){
//             current_indx=0;
//         }
//     let imgSource=imgs[current_indx].getAttribute('src');
//     lb_item.style.backgroundImage = `url(${imgSource})`;
// }

// rightArrow.addEventListener('click',nextSlide)

// function prevSlide(){
//     current_indx--;
//     if(current_indx<0){
//             current_indx=imgs.length-1;
//         }
//     let imgSource=imgs[current_indx].getAttribute('src');
//     lb_item.style.backgroundImage = `url(${imgSource})`;
// }

// LeftArrow.addEventListener('click',prevSlide)