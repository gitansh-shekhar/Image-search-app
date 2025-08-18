const accesskey="66sSAXhA1tjZXGS_3I4oIHwpw2I-Trf5wVI1_0ixkgw"
const formEl=document.querySelector("form");
const searchInputEl=document.getElementById("search-input");
const searchresultEl=document.querySelector(".search-results")
const showMoreButtonE1=document.getElementById("show-more-button");
let inputData="";
let page=1;
async function searchImages(){
    inputData=searchInputEl.value;
    if(!inputData) return;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    const response=await fetch(url);
    const data= await response.json();
    if(page===1){
        searchresultEl.innerHTML="";
    }
    const results=data.results;
    results.map((result)=>{
    const imageWrapper=document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image=document.createElement("img");
    image.src=result.urls.small;
    image.alt=result.alt_description;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";
    imageLink.textContent=result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchresultEl.appendChild(imageWrapper)
    });
    page++;
     if(page>1){
        showMoreButtonE1.style.display="block";
    }

}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page=1;
    searchImages();
});
  
showMoreButtonE1.addEventListener("click", ()=>{
searchImages();
});