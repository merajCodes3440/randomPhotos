const cardArray =[
  {
    name:'fries',
    img:"fries.jpg"
  },
  {
  name:'pizza',
  img:'pizza.jpg'
  },
  {
    name:'milkshake',
    img:'milkshake.jpg'
  },
  {
    name:'hotdog',
    img:'hotdog.jpg'
  },
  {
    name:'icecream',
    img:'icecream.jpg'
  },
   {
    name:'burger',
    img:'burger.jpg'
  },
  {
    name:'fries',
    img:"fries.jpg"
  },
  {
  name:'pizza',
  img:'pizza.jpg'
  },
  {
    name:'milkshake',
    img:'milkshake.jpg'
  },
  {
    name:'hotdog',
    img:'hotdog.jpg'
  },
  {
    name:'icecream',
    img:'icecream.jpg'
  },
   {
    name:'burger',
    img:'burger.jpg'
  }
]
cardArray.sort( ()=> 0.5 - Math.random());
const GridDisplay =document.querySelector('#grid');

function creatBoard(){
  for(let i=0;i<10;i++){
    const card= document.createElement('img')
    card.setAttribute('src','blank.jpg');
    card.setAttribute('data-id',i)  
    GridDisplay.appendChild(grid)
  console.log(card, i)
  }
}
creatBoard();
