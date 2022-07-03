let deadZombie = 0;
let player = newPlayer('assets/player1.png',550,250)
let playerHealth = 100 


/// creates a player
function newPlayer(url, left, bottom) {
    let player = document.createElement('img')
    player.src = url
    player.setAttribute('draggable',false)
    player.style.position = 'fixed'
    player.style.left = left + 'px'
    player.style.bottom = bottom + 'px'
    document.body.append(player)
    return player

}
///creates a zombie
function newZombie (left, bottom) {
    let score = document.getElementById("score").innerHTML = "SCORE:" + deadZombie;
    let zombie = document.createElement('img')
    zombie.src = 'assets/8-bit-zombie.png'
    zombie.setAttribute('draggable',false)
    zombie.style.position = 'fixed'
    zombie.style.left = left + 'px'
    zombie.style.bottom = bottom + 'px'
    document.body.append(zombie)
    zombie.addEventListener('click',e => {
        zombie.style.bottom = null
        zombie.style.left = null
        zombie.remove()
        console.log('deadZ')
        deadZombie += 1;
    })
    return zombie
}
///moves a zombie right
function moveZombieRight(zombie) {
    let myInterval = setInterval(() => {
        zombie.style.left = parseInt(zombie.style.left) + 1 + 'px'
        if(parseInt(zombie.style.left) == parseInt(player.style.left)) {
            clearInterval(myInterval)
        }
    },10)
}
///moves a zombie up
function moveZombieUp(zombie) {
    let myInterval = setInterval(() => {
        zombie.style.bottom = parseInt(zombie.style.bottom) + 1 + 'px'
        if(parseInt(zombie.style.bottom) == parseInt(player.style.bottom)) {
            clearInterval(myInterval)
        }
    },10)
}
///moves a zombie left
function moveZombieLeft(zombie) {
    let myInterval = setInterval(() => {
        zombie.style.left = parseInt(zombie.style.left) - 1 + 'px'
        if(parseInt(zombie.style.left) == parseInt(player.style.left)) {
            clearInterval(myInterval)
        }
    },10)
}
/// moves a zombie down
function moveZombieDown(zombie) {
    let myInterval = setInterval(() => {
        zombie.style.bottom = parseInt(zombie.style.bottom) - 1 + 'px'
        if(parseInt(zombie.style.bottom) == parseInt(player.style.bottom)) {
                clearInterval(myInterval)
        }
    },10)
}  


function collisionCheck(zombie) {
    let myInterval = setInterval(() => {
        if(parseInt(zombie.style.left) === parseInt(player.style.left) 
        && parseInt(zombie.style.bottom) === parseInt(player.style.bottom) ) {
        clearInterval(myInterval)
        alert('GAME OVER! YOU DIED')
        document.location.reload()
        }
    },1)
}

///evaluates where a zombie needs to go
function spawn(left,bottom) {
    const zombie = newZombie(left,bottom)
    if(left < parseInt(player.style.left)) {
    moveZombieRight(zombie)
    }
    if(left > parseInt(player.style.left)) {
    moveZombieLeft(zombie)
    }
    if(bottom < parseInt(player.style.bottom)) {
    moveZombieUp(zombie)
    }
    if(bottom > parseInt(player.style.bottom)) {
    moveZombieDown(zombie)
    }  
    
    collisionCheck(zombie)
}

let button = document.createElement('button')
button.innerHTML = 'Start';
button.onclick = function() {
    let horde = setInterval(()=>{
        let spawnPoint = Math.floor(Math.random() * 9);
        if(spawnPoint === 1) {
            spawn(-100,1000)
            }
            if(spawnPoint === 2) {
            spawn(800,1000)
            }
            if(spawnPoint === 3) {
            spawn(1600,1000)
            }
            if(spawnPoint === 4) {
            spawn(1600,400)
            }
            if(spawnPoint === 5) {
            spawn(1600,-100)
            }
            if(spawnPoint === 6) {
            spawn(800,-100)
            }
            if(spawnPoint === 7) {
            spawn(-100,-100)
            }
            if(spawnPoint === 8) {
            spawn(-100,500)
            }

    },800);
button.style.display = 'none';
}
document.body.append(button)