

function newPlayer(url, left, bottom) {
    let player = document.createElement('img')
    player.src = url
    player.style.position = 'fixed'
    player.style.left = left + 'px'
    player.style.bottom = bottom + 'px'
    document.body.append(player)
    return player
}

function newZombie (left, bottom) {
    let zombie = document.createElement('img')
    zombie.src = 'assets/8-bit-zombie.png'
    zombie.style.position = 'fixed'
    zombie.style.left = left + 'px'
    zombie.style.bottom = bottom + 'px'
    document.body.append(zombie)
    return zombie
}
function moveZombie(zombie) {
    console.log(zombie.style.left)
    let myInterval = setInterval(() => {
        zombie.style.left = parseInt(zombie.style.left) + 1 + 'px'
        if(parseInt(zombie.style.left) == 650) {
            clearInterval(myInterval)
        }
    },50)
    }


const testZombie = newZombie(100,100)
moveZombie(testZombie)



newPlayer('assets/placeholder.png',650,250)




