const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('.addTask > button');

buttonElement.addEventListener('click', addList);
inputElement.addEventListener('keyup', (e)=>{
    (e.keycode === 13 ? addList(e) : null);
})

function addList(e){
    
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li')
    const checkBtn = document.createElement('button')
    const delBtn = document.createElement('button')

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    

    if(inputElement.value !==''){
        newLi.textContent = inputElement.value;
        inputElement.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        
    });
}