const p1button = document.querySelector('#player1')
const p2button = document.querySelector('#player2')
const reset = document.querySelector('#reset')
const dispp1 = document.querySelector('#score1')
const dispp2 = document.querySelector('#score2')
const winscore=document.querySelector('#playingfor')
let p1score = 0
let p2score = 0
let winningscore = 5
let game = false
p1button.addEventListener('click', function () {
    if (!game) {
        p1score++;
        dispp1.textContent = p1score
        if (p1score === winningscore) 
        {
            game=true
            dispp1.classList.add('winner');
            dispp2.classList.add('looser');
            p1button.disabled=true
            p2button.disabled=true
        }

    }

})
p2button.addEventListener('click', function () {
    if (!game) {
        p2score++;
        dispp2.textContent = p2score
        if (p2score === winningscore) 
        {
            game=true
            dispp2.classList.add('winner');
            dispp1.classList.add('looser');
            p1button.disabled=true
            p2button.disabled=true
        }

    }

})
reset.addEventListener('click',function(){
    p1score=0
    p2score=0
    game=false
    dispp1.classList.remove('winner','looser')
    dispp2.classList.remove('winner','looser')
    dispp1.textContent=0
    dispp2.textContent=0
    p1button.disabled=false
    p2button.disabled=false
})
winscore.addEventListener('change',function(){
    winningscore=parseInt(this.value)
    p1score=0
    p2score=0
    game=false
    dispp1.classList.remove('winner','looser')
    dispp2.classList.remove('winner','looser')
    dispp1.textContent=0
    dispp2.textContent=0
    p1button.disabled=false
    p2button.disabled=false
})
