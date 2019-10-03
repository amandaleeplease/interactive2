console.log('hi')

let blindys = document.querySelectorAll('.blindy')

for(let counter = 0; counter < blindys.length; counter++){
	blindys[counter].style.animationDelay = (-Math.random() * 3000) + "ms"
}
