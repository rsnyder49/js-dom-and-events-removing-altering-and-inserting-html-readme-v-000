//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var ele = document.createElement('div');
ele.innerHTML = "Hello, DOM!";
ele.style.backgroundColor = '#f9f9f9';
ele.style.textAlign = 'center';

document.body.appendChild(ele);

var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
ele.appendChild(ul);

ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));