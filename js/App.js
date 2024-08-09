const input = document.querySelector('.inputTask');
const btnAdd = document.querySelector('.btnSubmit');
const ulList = document.querySelector('.listTarefas');

const done = document.querySelector('.done');

function newTaskAdded(){
    let ArrayList = [];

    function enviarNovaTarefa(){
        ArrayList.push(input.value);
        showTask();
    }

    function showTask(){
        let novaTare = '';
        
        ArrayList.forEach((tarefa) => {
            novaTare = novaTare + `
            <li>
                <p>${tarefa}</p>

                <div class="checkBox">
                    <button class="done">
                        <img src="/img/done.svg" alt="">
                    </button>
                    <button class="delete">
                        <img src="/img/delete.svg" alt="">
                    </button>
                </div>
            </li>
            `;
        });

        ulList.innerHTML = novaTare;
    }

    btnAdd.addEventListener('click', enviarNovaTarefa);
}
newTaskAdded();