const modalOverlay = document.querySelector('.modal-overlay');
const cursos = document.querySelectorAll('.curso');
const modal = document.querySelector('.modal');

for(let curso of cursos){
    curso.addEventListener("click", function(){
        const cursoId = curso.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove('maximize');
})

document.querySelector('.maximize-modal').addEventListener('click', function(){
    const contain = modal.classList.contains('maximize');
    if(!contain) {
      modal.classList.add('maximize');
    }
});

document.querySelector('.minimize-modal').addEventListener('click', function(){
    const contain = modal.classList.contains('maximize');
    if(contain) {
      modal.classList.remove('maximize');
    }
});