/*------------------------------navbar-------------------------------*/
//navbar element (ice & fire)
let nav = document.createElement("nav");
let p = document.createElement("h4");
nav.setAttribute("class", "navbar bg-dark text-white  ");
p.setAttribute("class", "text-center");
p.innerHTML = "ICE & FIRE API";
// form element
let form = document.createElement("form");
form.setAttribute("class", "form-inline ml-auto");
//input element
let input = document.createElement("input");
input.setAttribute("type", "search");
input.setAttribute("placeholder", "enter no 1 to 12");
input.setAttribute("id", "books");
//button element
let button = document.createElement("button");
button.setAttribute("class", "btn btn-outline-success my-2 my-sm-0");
button.setAttribute("type", "button");
button.addEventListener("click", individualBooks);
button.innerHTML = "Search";
//append section
nav.append(p, form, input, button);
document.body.append(nav);
/*---------------------------------------------end-of-navbar-----------------------*/
/*-------------------------------search bar function ----------------------------*/

let a = document.createElement("div");
a.innerHTML = "";
document.body.append(a);
//individual books
//
//
//
//
//----------------search only with numbers--------------------------
//
//
//
//
//
async function individualBooks() {
  try {
    let enter = document.getElementById("books").value;
    let link = `https://www.anapioficeandfire.com/api/books/${enter}`;
    let result = await fetch(link);
    let result1 = await result.json();
    //console.log(result1);

    a.innerHTML += `<div class="text-center mx-auto py-2" style="width:24rem ">
  <div class="card " >
  <div id="test1" ><h5 class="card-header "style="background-color:#f2d116; " >Book Name:${
    result1.name
  }</h5></div>
<div class="card-body "style="background-color:#16f2a5; ">
      <p><h6>Author Name:${result1.authors}</h6></p>
      <p>ISBN:${result1.isbn}</p>
      <p>No. of Pages:${result1.numberOfPages}</p>
      <p>Publisher:${result1.publisher}</p>
      <p> Release Date:${result1.released.slice(0, 10)}</p>
      <p>Characters :<a href="${result1.characters.slice(
        0,
        1
      )}" target="_blank">Character 1</a>
      <a href="${result1.characters.slice(
        1,
        2
      )}" target="_blank">Character 2</a>
  <a href="${result1.characters.slice(2, 3)}" target="_blank">Character 3</a>
  <a href="${result1.characters.slice(3, 4)}" target="_blank">Character 4</a>
  <a href="${result1.characters.slice(
    4,
    5
  )}" target="_blank">Character 5</a> </p>

    </div>
  </div>
</div> `;
  } catch (error) {
    a.innerHTML += `<div class="card mx-auto " style="width: 22rem;">
<img class="card-img-top" src="sorry.jpg" alt="Card image cap">
<div class="card-body">
<p class="card-text text-center">No More Books to <br><b >FETCH</b><br>Please Refresh the Page</p>
</div>
</div>`;
  }
}
/*------------------------------------Books-fetch-end-----------------------------------*/
/*-----------------------------------All-Books-----------------------------------*/
let container = document.createElement("div");
let row = document.createElement("div");
container.setAttribute("class", " container");
row.setAttribute("class", "row");
row.innerHTML = "";
container.append(row);
document.body.append(container);
/*---------------------------------------------------*/
async function allBooks() {
  try {
    let url = `https://www.anapioficeandfire.com/api/books`;
    let link = await fetch(url);
    let result = await link.json();
    //console.log(result);
    for (let i = 0; i < result.length; i++) {
      row.innerHTML += `<div class="col-sm-12 col-lg-4 py-2">
    <div class="card   " id="flag">
    <div id="test1" ><h5 class="card-header " style="background-color:#51e320; color: white ">Book Name:${
      result[i].name
    }</h5></div>
<div class="card-body  "style="background-color:#d7e632;  ">
        <h5>Author Name:${result[i].authors}</h5>
        <p>ISBN:${result[i].isbn}</p>
        <p>No. of Pages:${result[i].numberOfPages}</p>
        <p>Publisher:${result[i].publisher}</p>
        <p> Release Date:${result[i].released.slice(0, 10)}</p>
        <p>Characters :<a href="${result[i].characters.slice(
          0,
          1
        )}" target="_blank">Character 1</a>
        <a href="${result[i].characters.slice(
          1,
          2
        )}" target="_blank">Character 2</a>
    <a href="${result[i].characters.slice(
      2,
      3
    )}" target="_blank">Character 3</a>
    <a href="${result[i].characters.slice(
      3,
      4
    )}" target="_blank">Character 4</a>
    <a href="${result[i].characters.slice(
      4,
      5
    )}" target="_blank">Character 5</a> </p>

      </div>
    </div>
  </div>`;
    }
  } catch (error) {
    row.innerHTML += "error";
  }
}
allBooks();
/*-----------------------------------All-Books-end----------------------------------*/
