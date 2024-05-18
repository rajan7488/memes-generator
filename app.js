const btn=document.querySelector(".btn");
const memeTitle=document.querySelector(".meme-title");
const authorName=document.querySelector(".meme-author");
const img=document.querySelector(".image");

const memeGenerarator=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes",{
        headers:{
            Accept:"application/json",
        },
    })
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        // const[url,title,author]=data;//destructor the data
        memeTitle.innerText=data.title;
        authorName.innerText=`Meme by: ${data.author}`;
        img.src=data.url;

    })
    .catch((err)=>{
        console.log("failed due to technical error i can not call to the Api");
    })
};

memeGenerarator();

btn.addEventListener("click",memeGenerarator);