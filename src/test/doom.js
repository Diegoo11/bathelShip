function waterpoint(id) {
    document.getElementById(id).classList.add('waterpoint');
}

function damagepoint(id) {
    document.getElementById(id).classList.add('damagepoint');
}

function shipcoords(id) {
    document.getElementById(id).classList.add('shipcoords');
}

export { waterpoint };
export { damagepoint };
export { shipcoords };
