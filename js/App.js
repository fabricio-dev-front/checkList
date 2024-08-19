const input = document.querySelector('.inputTask');
const btnAdd = document.querySelector('.btnSubmit');
const ulList = document.querySelector('.listTarefas');

let arrayList = [];

function main(){
    if(input.value === ''){
        alert('você precisa adicionar alguma tarefa');
    } else {
        arrayList.push({
            tarefa: input.value,
            concluida: false,
        });
        input.value = '';

        newTask();
    }
}

function newTask(){
    let novaTarefa = '';

    arrayList.forEach((item, index) => {
        novaTarefa = novaTarefa + `
            <li class="${item.concluida && "taksConcluida"}">
                <p>${item.tarefa}</p>
                <div class="checkBox">
                    <button class="done">
                        <img src="/img/done.svg" onclick="taskCompleted(${index})">
                    </button>
                    <button class="delete">
                        <img src="/img/delete.svg" onclick="deleteTask(${index})">
                    </button>
                </div>
            </li>
        `;
    });
    ulList.innerHTML = novaTarefa;

    localStorage.setItem('listaTarefas', JSON.stringify(arrayList));
}

function taskCompleted(index){
    arrayList[index].concluida = !arrayList[index].concluida;
    newTask();
}

function deleteTask(index){
    arrayList.splice(index, 1);
    newTask();
}

function reloadTask(){
    const taskLocalStorage = localStorage.getItem('listaTarefas');

    if(taskLocalStorage){
        arrayList = JSON.parse(taskLocalStorage);
    }

    newTask();
}

reloadTask();
btnAdd.addEventListener('click', main);
