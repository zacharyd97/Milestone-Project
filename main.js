
function newPlayer(url, left, bottom) {
    let player = document.createElement('img')
    player.src = url
    player.style.position = 'fixed'
    player.style.left = left + 'px'
    player.style.bottom = bottom + 'px'
    document.body.append(player)
    return player
}

newPlayer('assets/placeholder.png',650,250)