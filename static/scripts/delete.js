const filasInfo = document.querySelector('.info');
const checkDelete = document.querySelector('.checkDelete')
function borrar(identificador){
    filasInfo.insertAdjacentHTML('beforeend','<input type="checkbox" class="checkDelete">')
    switch (identificador) {
        case 'producto':
            if(checkDelete.checked){

            }
            break;
    
        default:
            break;
    }
}
