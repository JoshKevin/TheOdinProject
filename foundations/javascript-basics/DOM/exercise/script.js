let redPara = document.createElement('p');
redPara.style.color = 'red';
redPara.textContent = 'Hey I\'m red!';
document.body.appendChild(redPara); 

let blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = 'I\'m a blue h3';
document.body.appendChild(blueH3);

let divContainer = document.createElement('div');
divContainer.style.border = 'black';
divContainer.style.backgroundColor = 'pink';
document.body.appendChild(divContainer);

let childH1 = document.createElement('h1')
childH1.textContent = 'I\'m in a div'
divContainer.appendChild(childH1);

let childPara = document.createElement('p');
childPara.textContent = 'ME TOO!';
divContainer.appendChild(childPara);

