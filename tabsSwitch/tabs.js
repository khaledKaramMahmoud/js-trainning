let tabs = document.querySelectorAll('li');
let tabsArr=Array.from(tabs);
let divs = document.querySelectorAll('.content>div');
let divsArr=Array.from(divs);
// loop all tabs
tabsArr.forEach((el)=>{
    el.addEventListener('click', function(e){
        // remove active class
        tabsArr.forEach(el=>{
            el.classList.remove('active');
        })
        // currentTarget is the element i'm in
        e.currentTarget.classList.add('active')
        // hide divs
        divsArr.forEach(d=>{
            d.style.display="none"
        })
        // show div with targeted dataset
        document.querySelector(e.currentTarget.dataset.conttt).style.display='block'

    })
})