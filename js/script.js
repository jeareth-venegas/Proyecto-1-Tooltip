//llamo a cada id de los tooltip-text
let tooltipTextCR = document.getElementById ('cr');
const tooltipCR = document.getElementById ('costa-rica');
console.log('cr');


//evento de mouse move para que cada vez que el puntero se mueva sobre la imagen salga el tooltip
//se añaden coordenadas

//COSTA RICA
function costarica(event){
    let x=event.clientX;
        y=event.clientY;
    tooltipTextCR.style.top = (y + 10) + 'px';
    tooltipTextCR.style.left = (y + 10) + 'px';
}

tooltipCR.addEventListener('mouseenter', costarica);

let tooltipTextES = document.getElementById ('es');
const tooltipES = document.getElementById ('el-salvador');

function elSalvador(event){
    let x=event.clientX;
        y=event.clientY;
    tooltipTextES.style.top = (y + 10) + 'px';
    tooltipTextES.style.left = (y + 10) + 'px';
}

tooltipES.addEventListener('mouseenter', elSalvador);