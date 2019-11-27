let hoverables = document.querySelectorAll('.hoverable')


document.addEventListener('mousemove',function(event){
  
  let middleX = window.innerWidth / 2
  let middleY = window.innerHeight / 2
  
  console.log('mids',middleX,middleY)
  console.log('mouse',event.offsetX,event.offsetY)
  
  let x = event.pageX - middleX
  let y = event.pageY - middleY
  console.log('aaa',x,y)
  
  let angle = -Math.atan2(x,y) + Math.PI/2 + Math.PI * 2
  
  let dist = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
  
  let maxDist = Math.sqrt(Math.pow(middleX,2) + Math.pow(middleY,2))
  
  dist = dist/maxDist * 15
  
  
  
  console.log(angle)
  
  
  hoverables[0].style.transform = "rotate("+angle+"rad) translateX("+dist+"px) rotate(-"+angle+"rad)"
  
  
})