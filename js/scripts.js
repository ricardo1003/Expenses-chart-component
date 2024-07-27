const balanceAmountElement = document.getElementsByClassName("balanceAmount")[0]
const progressBarElements = [...document.getElementsByClassName("progressBar")]
const progressBarValues = document.getElementsByClassName("moneyValue")
const monthTotalElement = document.getElementsByClassName("monthTotal")

let randomData = Array(progressBarElements.length).fill(0)

for(let i=0; i < progressBarElements.length; i++){
    randomData[i] = Math.random()*55
    progressBarElements[i].style.height = `${randomData[i]*1.5}%`
}

const highestValue = Math.max(...randomData)

for(let i=0; i < progressBarElements.length; i++){
    if(progressBarElements[i].style.height === `${(highestValue*1.5).toFixed(4)}%`){
        progressBarElements[i].classList.add("highest")
    }else{
        progressBarElements[i].classList.remove("highest")
    }
    progressBarElements[i].addEventListener("mouseover",()=>{
        progressBarValues[i].innerHTML = `$${(randomData[i]*1.5).toFixed(2)}`
    })
}
