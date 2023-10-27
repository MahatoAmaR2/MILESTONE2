console.log("radhe radhe");
let poup = document.getElementById("poup");
let addbtn = document.getElementById("add")
let closebtn = document.getElementById("close");

addbtn.addEventListener("click",()=>{
    poup.classList.add("show");
})
closebtn.addEventListener("click",()=>{
    poup.classList.remove("show");
})


// add
let poster = document.getElementById("poster");
let title = document.getElementById("title");
let description = document.getElementById("description");
let intro = document.getElementById("intro");
let form = document.getElementById("form");


let hero = document.getElementById("hero");
let blog_cards = document.getElementById("blogCards");

// creat ****************************************
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   let blog_card= document.createElement("div");
   blog_card.classList.add("blog_card");
   blog_cards.appendChild(blog_card);

   let ptitle= document.createElement("p");
   let titleValue = document.createTextNode(title.value);
   ptitle.appendChild(titleValue);
   ptitle.classList.add("title");

   let desCription= document.createElement("p");
   let desCriptionValue = document.createTextNode(description.value);
   desCription.appendChild(desCriptionValue);
   desCription.classList.add("description");

   let rb= document.createElement("a");
   rb.href="./blogPage.html";
   let rbnode = document.createTextNode("Read");
   rb.appendChild(rbnode);
   rb.classList.add("read_button");

    let image = document.createElement("img");
    image.src = poster.value;
    image.classList.add("read_button");

    blog_card.append(image,ptitle,desCription,rb)


// loclStorage
// let students = ["Vikas", "Utsav", "Pranjal",  
//                         "Aditya", "Arya"] 

let blogLists = [
    {
        title: title.value,
        description: description.value,
        intro: intro.value,
        poster: poster.value,
    }
]
        let string = JSON.stringify(blogLists) 
        localStorage.setItem("blogLists", string) 

})
