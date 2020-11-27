let list = [
  {
    id: 1,
    name: "Replicar el eje del profe",
    done: false,
  },
  {
    id: 2,
    name: "Replicar el eje del profe 2",
    done: false,
  },
  {
    id: 3,
    name: "Replicar el eje del profe 3",
    done: false,
  },
  {
    id: 4,
    name: "Replicar el eje del profe 4",
    done: false,
  },
  {
    id: 5,
    name: "XXXX",
    done: false,
  },
];

let to_select = [];

for(let i=0; i<list.length; i++){
  var currentList = list[i];
  if (currentList.done === true){
    to_select.push({
      id: currentList.id,
      name: currentList.name,
      done: currentList.done,
    });
  }
}

const listContainer = document.querySelector("#list-content");
paintList(list);

const listContainer2 = document.querySelector("#list-content2");
paintList2(to_select);


function createTask(task) {
  const input = document.querySelector("#inputTask");
  list.push({
    id: list.length + 1,
    name: input.value,
    done: false,
  });
  input.value = "";
  paintList(list);
}

const checkTask = (checkbox, id) => { 
  const taskIndex = list.findIndex((element) => {
    return element.id === id;
  });
  let task = list.splice(taskIndex, 1)[0];
  
  task.done = checkbox.checked;
  to_select.push(task);
  
  paintList2(to_select);
  paintList(list);
};


function paintList(lst) {
  let res = "";
  lst.forEach((element) => {
    res += renderListItem(element);
  });
  listContainer.innerHTML = res;
}

function paintList2(lst) {
  let res2 = "";
  lst.forEach((element) => {
    res2 += renderListItem(element);
  });
  listContainer2.innerHTML = res2;
}


let input = document.querySelector('input');

input.addEventListener('keyup',(e) => {
  if (e.keyCode === 13) {
    const input = document.querySelector("#inputTask");
    list.push({
      id: list.length + 1,
      name: input.value,
      done: false,
    });
    input.value = "";
    paintList(list);      
  }
})

function renderListItem(item) {
  const isDone = item.done ? "is-done" : "";
  const checked = item.done ? "checked" : "";
  return `<li class="list-group-item list-item ${isDone}">
              <input type="checkbox" ${checked} aria-label="Checkbox for following text input" onclick="checkTask(this, ${item.id})"> ${item.name}
          </li>`;
}




