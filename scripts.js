// Mouse pointer
const blob = document.querySelector('#blob')
const footer = document.querySelector('footer')
const bodyy = document.body
const maxY = footer.top;

let clientX
let clientY
let scrollY = 0

document.body.onpointermove = event => {
    ({clientX, clientY} = event);

    // blob.style.left = `${x}px`
    // blob.style.top = `${y}px`

    blob.animate({
        left: `${clientX}px`,
        top : `${clientY+scrollY}px`
    }, {duration:3000, fill:'forwards'})
}

document.body.onscroll = () => {
    scrollY = window.scrollY
    
    if(maxY != scrollY){
        blob.animate({
            left: `${clientX}px`,
            top : `${clientY+scrollY}px`
        }, {duration:3000, fill:'forwards'})
    }

}




// flipping theme icon
const lightIcon = document.querySelector("#lightIcon");
const darkIcon = document.querySelector("#darkIcon");
const themeToggleBtn = document.querySelector("#themeToggleBtn");

themeToggleBtn.addEventListener('click', function(){
    lightIcon.classList.toggle('hidden')
    darkIcon.classList.toggle('hidden')
});


// (wanna be) Developer animation
const wannaBeDiv = document.querySelector("#wannaBeDiv")
const toBeSpan = document.querySelector("#toBeSpan")
const wannaBeSpan = document.querySelector("#wannaBeSpan")
const whateverSpan = document.querySelector("#whateverSpan")
const designationDiv = document.querySelector("#designation")

const vals = [toBeSpan, wannaBeSpan, whateverSpan]

let timeVal = 2000
for(let i=0; i<vals.length; i++){
    setTimeout(function(){
        vals[i].style.transition = 'opacity 0.7s ease-in'
        vals[i].style.opacity = '100%'
    }, timeVal)
    timeVal += 1000
    
    setTimeout(function(){
        vals[i].style.opacity = '0%'
    }, timeVal)
    timeVal += 1000
}

timeVal -= 300
setTimeout(()=>{
    wannaBeDiv.classList.add('hidden')
}, timeVal)

setTimeout(()=>{
    designationDiv.classList.remove('justify-left')
    // designationDiv.classList.add('justify-between')
    designationDiv.style.transition = 'transform 0.9s ease-in-out';
    designationDiv.style.transform = 'translateX(33.3333%)';
},timeVal)


// Page reload on logo click
let logo = document.querySelector("#logo")
logo.addEventListener('click', ()=>{location.reload()})