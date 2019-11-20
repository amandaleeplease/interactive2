/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let items = document.querySelectorAll('.item')

let timer 

let isMouseDown = false

document.addEventListener('mousedown',function(){
  isMouseDown = true
})

document.addEventListener('mouseup',function(){
  setTimeout(()=>{
    isMouseDown = false
  }, 500)
})


document.addEventListener('click',function(){
  document.body.classList.add('clicked')
//   clearTimeout(timer)
//   timer = setTimeout(function(){
    
    
  

//     for(let i = 0; i < items.length; i++){
//       items[i].style.gridColumn = Math.floor(4 * Math.random())
//       items[i].style.gridRow = Math.floor(3 * Math.random())
//     }
//   },800)
  
  
  
})

setInterval(function(){
    
    
  
    if(!isMouseDown){
        for(let i = 0; i < items.length; i++){
          items[i].style.gridColumn = Math.floor(4 * Math.random())
          items[i].style.gridRow = Math.floor(3 * Math.random())
        }
    }
  },1000)