const tooltipText = document.querySelectorAll('.tooltip-text');
const tooltip = document.querySelectorAll('.tooltip');

for (let i = 0; i < tooltip.length; i++){
    tooltip[i].addEventListener('mouseenter', (event)=>{
        const id = event.currentTarget.getAttribute('href').substring(1)
        console.log(id);

        for (let i = 0; i < tooltipText.length; i++){
        tooltipText[i].classList.add('view');
            if(tooltipText[i].getAttribute('id') != id){
                tooltipText[i].classList.remove('view');
            }
    }});
    tooltip[i].addEventListener('mouseleave', (event)=>{
        tooltipText[i].classList.remove('view');
    });
}