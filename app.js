function add(){
var node= document.createElement("div");
var text= document.createTextNode("hekdsd");
node.appendChild(text);
var element=document.getElementsByClassName('box');
element.append(node);
}