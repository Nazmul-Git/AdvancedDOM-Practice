// SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.querySelector('.div-1'));
console.log(document.querySelectorAll('.section'));
console.log(document.getElementById('p1'));
console.log(document.getElementsByTagName('img'));
console.log(document.getElementsByClassName('section'));

// creating and inserting elements
const newElement=document.createElement('div');
newElement.classList.add('message');
newElement.innerHTML= 'Hello ! something happen when you click this <button class="btn">Got it!</button>';
const header=document.querySelector('.header');
header.prepend(newElement);

const footer=document.querySelector('.footer');
// footer.append(newElement);

// delete message
document.querySelector('.btn').addEventListener('click', ()=>{
    newElement.remove();
})

// inline style
newElement.style.backgroundColor='green';
newElement.style.width='120%';

