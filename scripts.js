// Mouse pointer
const blob = document.querySelector('#blob')
const footer = document.querySelector('footer')
const bodyy = document.body
const originalBg = document.querySelector('#originalBg')

let clientX
let clientY
let scrollY = 0

function animateBlob(){
    if(blob.classList.contains('torch-mode-on')){
        blob.animate({
            left: `${clientX}px`,
            top : `${clientY + scrollY}px`
        }, {duration:3000, fill:'forwards'})
    }
}

document.body.onpointermove = event => {
    ({clientX, clientY} = event);

    animateBlob();
}

document.body.onscroll = () => {
    scrollY = window.scrollY
    
    animateBlob();
}




// flipping theme icon
const lightIcon = document.querySelector("#lightIcon");
const darkIcon = document.querySelector("#darkIcon");
const themeToggleBtn = document.querySelector("#themeToggleBtn");

themeToggleBtn.addEventListener('click', function(){
    lightIcon.classList.toggle('hidden')
    darkIcon.classList.toggle('hidden')

    let r = document.body
    let rs = getComputedStyle(r)

    let temp = rs.getPropertyValue('--bg-color-1')
    r.style.setProperty('--bg-color-1', rs.getPropertyValue('--bg-color-2'));
    r.style.setProperty('--bg-color-2', temp);

    temp = rs.getPropertyValue('--complementory-1')
    r.style.setProperty('--complementory-1', rs.getPropertyValue('--complementory-2'));
    r.style.setProperty('--complementory-2', temp);

    temp = rs.getPropertyValue('--torch-color-11')
    r.style.setProperty('--torch-color-11', rs.getPropertyValue('--torch-color-21'));
    r.style.setProperty('--torch-color-21', temp);
    temp = rs.getPropertyValue('--torch-color-12')
    r.style.setProperty('--torch-color-12', rs.getPropertyValue('--torch-color-22'));
    r.style.setProperty('--torch-color-22', temp);
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
    designationDiv.style.transform = 'translateX(20%)';
},timeVal)


// Page reload on logo click
let logo = document.querySelector("#logo")
logo.addEventListener('click', ()=>{document.location.reload()})



// Torch toggle
const torchToggle = document.querySelector('#torchToggle')

torchToggle.addEventListener('click', function toggleTorchClasses(){
    blob.classList.toggle("torch-mode-on")
    blob.classList.toggle("hidden")
    originalBg.classList.toggle('hidden')
})


