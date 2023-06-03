let $ = document
let price = $.getElementById('price')
let adStatus = $.getElementById('adStatus')
let clickPrice = $.getElementById('clickPrice')
let clickSwitch = $.getElementById('clickSwitch')
let changeTop = $.getElementById('changeTop')
let changeBottom = $.getElementById('changeBottom')
let switchTop = $.getElementById('switch-top')
let switchBottom = $.getElementById('switch-bottom')
let iconPrice = $.getElementById('iconPrice')
let iconAd = $.getElementById('iconAd')
let flag = true
price.addEventListener('click',function(){
    if(flag){
        clickPrice.style.display = 'block'
        flag = false
        iconPrice.className = ('fas fa-angle-up')
    }else{
        clickPrice.style.display = 'none'
        flag = true
        iconPrice.className = ('fas fa-angle-down')
    }
})
adStatus.addEventListener('click',function(){
    if(flag){
        clickSwitch.style.display = 'block'
        flag = false
        iconAd.className = ('fas fa-angle-up')
    }else{
        clickSwitch.style.display = 'none'
        flag = true
        iconAd.className = ('fas fa-angle-down')
    }
})
switchTop.addEventListener('click',function(){
    changeTop.classList.toggle('change')
})
switchBottom.addEventListener('click',function(){
    changeBottom.classList.toggle('change')
})