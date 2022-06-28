/// creates a player
function newPlayer(url, left, bottom) {
    let player = document.createElement('img')
    player.src = url
    player.style.position = 'fixed'
    player.style.left = left + 'px'
    player.style.bottom = bottom + 'px'
    document.body.append(player)
    return player
}
///creates a zombie
function newZombie (left, bottom) {
    let zombie = document.createElement('img')
    zombie.src = 'assets/8-bit-zombie.png'
    zombie.style.position = 'fixed'
    zombie.style.left = left + 'px'
    zombie.style.bottom = bottom + 'px'
    document.body.append(zombie)
    zombie.addEventListener('click',e => {
        console.log('dead z')
        zombie.style.display = 'none'
    })
    return zombie
}
///moves a zombie right
function moveZombieRight(zombie) {
    console.log(zombie.style.left)
    let myInterval = setInterval(() => {
        zombie.style.left = parseInt(zombie.style.left) + 1 + 'px'
        if(parseInt(zombie.style.left) == 650) {
            clearInterval(myInterval)
        }
    },10)
}
///moves a zombie up
function moveZombieUp(zombie) {
    console.log(zombie.style.bottom)
    let myInterval = setInterval(() => {
        zombie.style.bottom = parseInt(zombie.style.bottom) + 1 + 'px'
        if(parseInt(zombie.style.bottom) == 250) {
            clearInterval(myInterval)
        }
    },10)
}
///moves a zombie left
function moveZombieLeft(zombie) {
    console.log(zombie.style.left)
    let myInterval = setInterval(() => {
        zombie.style.left = parseInt(zombie.style.left) - 1 + 'px'
        if(parseInt(zombie.style.left) == 650) {
            clearInterval(myInterval)
        }
    },10)
}
/// moves a zombie down
function moveZombieDown(zombie) {
    console.log(zombie.style.bottom)
    let myInterval = setInterval(() => {
        zombie.style.bottom = parseInt(zombie.style.bottom) - 1 + 'px'
        if(parseInt(zombie.style.bottom) == 250) {
                clearInterval(myInterval)
        }
    },10)
}  

function spawn(left,bottom) {
    const zombie = newZombie(left,bottom)
    if(left < 650) {
        moveZombieRight(zombie)
    }
    if(left > 650) {
        moveZombieLeft(zombie)
    }
    if(bottom < 250) {
        moveZombieUp(zombie)
    }
    if(bottom > 250) {
        moveZombieDown(zombie)
    }
}

let horde = setInterval(()=>{
    let spawnPoint = Math.floor(Math.random() * 9);
    console.log(spawnPoint)
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
        if(spawnPoint === 0) {
            clearInterval(horde)
        }
},1000);


    





newPlayer('assets/placeholder.png',650,250)




