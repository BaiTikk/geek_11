const email = document.querySelector('#email')
const check = document.querySelector('.check')
const result = document.querySelector('.result')

const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/
function keyCode (){
    if (regExp.test(email.value)){
        result.innerText = 'super'
        result.style.color = 'green'
    } else {
        result.innerText = 'it is bad'
        result.style.color = 'red'
    }
}
check.onclick = () => keyCode()

document.addEventListener('keydown', (e) =>{
    e.keyCode === 13 ? keyCode() : false
})
 //2
const blockInner = document.querySelector('.block_inner')
let position = 0
let move = () =>{
    if(position < 450){
        position++
        blockInner.style.left = `${position}px`
        setTimeout(move, 1)
}}
move()
