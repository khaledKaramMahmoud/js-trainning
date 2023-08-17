let myHttp=new XMLHttpRequest();
let allPosts=[]

function getPosts(){
    //open what
myHttp.open('GET','https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50');
//test
//myHttp.open('GET','https://jsonplaceholder.typicode.com/posts');
// now send req you choose
myHttp.send();

myHttp.addEventListener('readystatechange',function(){
    if(myHttp.readyState==4 && myHttp.status==200){
        allPosts=JSON.parse(myHttp.response).results;
        console.log(allPosts);
        renderPosts()
    }
});
}

document.querySelector('.btn').addEventListener('click',getPosts)

function renderPosts(){
    let postStructure=``;

    for(let i=0; i<allPosts.length;i++){
        postStructure+=`
        <div class="col-md-3 my-5">
        <div class="posts">
            <img style='height:330px' class='w-100' src="https://image.tmdb.org/t/p/w500${allPosts[i].backdrop_path}" alt="img"/>
            <h3>${allPosts[i].title}</h3>
            <p>${allPosts[i].overview}</p>
        </div>
    </div>
    `
    }

    document.getElementById('posts').innerHTML=postStructure;
}

