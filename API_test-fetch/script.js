let articles=[]

async function getNews(country,category) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e14708a7a08547d6938245ad9833083a`);
    const data = await response.json();
    articles=data.articles;
    displayNews();
    // console.log(articles);
}


function displayNews(){
    let newsItem=``;
    for(let i=0;i<articles.length;i++){
        newsItem+=`
            <div class="col-md-3">
                <div class="item">
                    <img src="${articles[i].urlToImage?articles[i].urlToImage:'img.jpg'}" height="200px" class="w-100" alt="img">
                    <h3>${articles[i].title}</h3>
                    <p>${articles[i].description}</p>
                </div>
            </div>
        `
    }
    document.getElementById('rowData').innerHTML=newsItem;
}

let lis = document.querySelectorAll('.li-category');
let langSelect= document.querySelector('select')

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function (e) {
        if(langSelect.value=='Language'){
        getNews('eg', e.target.innerHTML);
    }else{
        getNews(langSelect.value, e.target.innerHTML);
    }
    
    for (let j = 0; j <lis.length; j++) {
        lis[j].classList.remove('active')
    }
    e.target.classList.add('active')
    });
}

langSelect.addEventListener('change', function () {
    let activeCategory = document.querySelector('.li-category.active');
    if (activeCategory) {
        getNews(langSelect.value, activeCategory.innerHTML);
    }
});



getNews('eg','sports')