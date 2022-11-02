let showDate = document.getElementById('show_date');

let d = new Date();

const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

const app = document.querySelector("#terminal");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
    
      createText("Welcome ");
      await delay(700);
  createText("Starting the server...");
  await delay(1500);
    createText(`Last login: on ${d.getHours()}:${d.getMinutes()}_${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`)

//   createText("You can run several commands:");
//   createCode("home", "For GUI Homepage");
  createCode("deep --help", "See all commands.");
//   createCode("about me", "Who am i and what do i do.");
//   createCode("contact", "Want to contact me?");
//   createCode("clear", "Clear the terminal");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# DrasticCoder";
  span1.textContent = " in";
  span2.setAttribute('class',"guest");
  span2.textContent = " ~/guest";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  input.setAttribute('autofocus','true')
  input.setAttribute("onBlur",'this.focus()')
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "deep --help"){
    trueValue(value);
    createCode("$home", "For GUI homepage ;)");
    createCode("cd projects", "My projects ;)");
    createCode("cd about", "Who am i and what do i do.");
    createCode("cd contact", "Want to contact me?.");
    createCode("clear", "Clean the terminal.");
    
    
  }
  else if(value=== "$home"){
    trueValue(value);
    createText("Click here For GUI <a href='/' target='_blank'>LocalHost:5173</a>")
  }
  else if(value === "cd projects"){
    trueValue(value);
    createText("<a href='/' target='_blank'><i class='fab fa-wrench '></i> Click the link to view projects and tool localhost:5173/projects</a>")
  }
  else if(value === "cd about"){
    trueValue(value);
    createText("I am Deep Bansode)")
    createText("For more details visit this link <a href='/about' target='_blank'>localhost:5173/about</a>")
  }
  else if(value === "cd contact"){
    trueValue(value);
    createText("For more details visit this link <a href='/contact' target='_blank'>localhost:5173/contact</a>") }
  else if(value === "cd skills"){
    trueValue(value);
    createText("Didn't you mean: skill ?")
    createText("Click  here <a href='/skills' target='_blank'>localhost:5173/skills</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h6");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("p");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
