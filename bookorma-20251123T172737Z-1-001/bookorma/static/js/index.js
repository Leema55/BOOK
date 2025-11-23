// Selecting the needed elements for add 
let addbtn = document.querySelector("button");
let addinput = document.querySelector(".hola");
let ul = document.querySelector("ul");

// عنصر البحث
let searchInput = document.querySelector("#search-books input");

// إضافة كتاب
addbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let book = addinput.value;
    if(book.length > 0){
       let li  = document.createElement("li");
       
       let nameSpn = document.createElement("span");
       nameSpn.className = "name";
       nameSpn.textContent = book;
       
       let deleteSpn = document.createElement("span");
        deleteSpn.className = "delete";
        deleteSpn.textContent = "delete";

        li.appendChild(nameSpn);
        li.appendChild(deleteSpn);

        ul.appendChild(li);
        addinput.value = "";
    }
});

// حذف كتاب
ul.addEventListener("click",(e)=>{
    if(e.target.className === "delete"){
        e.target.parentNode.remove();
    }
});

// البحث في الكتب
searchInput.addEventListener("keyup", (e) => {
    let searchTerm = e.target.value.toLowerCase();
    let books = ul.getElementsByTagName("li");
    
    Array.from(books).forEach((book) => {
        let bookName = book.firstElementChild.textContent.toLowerCase();
        
        if(bookName.indexOf(searchTerm) != -1){
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});