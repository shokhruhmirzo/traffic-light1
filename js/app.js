var elRed = document.querySelector('.red')
var elGreen = document.querySelector('.green')
var elYellow = document.querySelector('.yellow')
var elPsh = document.querySelector('.walk-green')
var elSpan = document.querySelector('.span')
var elCar = document.querySelector('.car')
var elPerson = document.querySelector('.person')
var count = 0
var clock = 8
var time = 0

setInterval(() => {
    time = time + 1
    count = count + 1
    clock = clock - 1

    if(count >=1 && count <=5){
        elRed.classList.add('qizil')
        elYellow.classList.remove('sariq')
        elGreen.classList.remove('yashil')
        elPsh.src = './img/person-walking-solid.svg'
        elSpan.textContent = clock
        elSpan.style.color = 'red'
    }
    if(count >=5 && count <=7 ){
        elRed.classList.remove('qizil')
        elYellow.classList.add('sariq')
        elGreen.classList.remove('yashil')
        elSpan.textContent = clock
        elSpan.style.color = 'yellow'
    }

    if(count >=8 && count <=14){
        elRed.classList.remove('qizil')
        elYellow.classList.remove('sariq')
        elGreen.classList.add('yashil')
        elPsh.src = '/img/walk-red.svg'
        elSpan.textContent = clock
        elSpan.style.color = 'green'
    }

    if(time >= 1){
        elPerson.style.transform = 'translateY(410px)'
    }
    if(time >= 8){
        elCar.style.transform = 'translateX(650px)'
        elCar.src = '/img/car-svetafor.png'
    }
    if(time >= 15){
        elPerson.style.transform = 'translateY(210px)'
    }
    if(time >= 22){
        elCar.src = '/img/car-svetafor-left.png'
        elCar.style.transform = 'translateX(0px)'
    }

    if(time == 28){
        time = 0
    }
    if(clock == 1){
        clock = 8
    }
    if(count >= 14){
        count = 0
    }
},1000)