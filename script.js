const container = document.querySelector("#container");
const content = document.createElement("div");
content.textContent = "This is you glorious content div!!!";
container.appendChild(content);
content.classList.add('content');
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
const inh1 = document.createElement("h1");
inh1.textContent = "I'm in a div";
const inp = document.createElement("p");
inp.textContent="ME TOO!";
sdiv.append(inh1, inp);
container.appendChild(sdiv);