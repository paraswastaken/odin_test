const container = document.querySelector("#container");
const content = document.createElement("div");
content.textContent = "This is you glorious content div!!!";
container.appendChild(content);
content.setAttribute('class', 'content');
const red = document.createElement("p");
red.textContent="Hey I'm red";
red.style.color = "red";
container.appendChild(red);
const blu = document.createElement("h3");
blu.textContent="I'm a blue h3!";
blu.style.color = "blue";
container.appendChild(blu);
const sdiv = document.createElement("div");
sdiv.style.borderStyle = "solid";
sdiv.style.borderColor = "black";
sdiv.style.backgroundColor = "pink";
const inh1 = document.createElement("button");
inh1.textContent = "I'm in a div";
const inp = document.createElement("p");
inp.textContent="ME TOO!";
sdiv.append(inh1, inp);
container.appendChild(sdiv);
inh1.addEventListener('click', function (e) {
  alert("HELLOOOOO!!");
  console.log(e.target);
  e.target.style.backgroundColor="blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title+" by "+author+", "+pages+", "+read;
    }
}
