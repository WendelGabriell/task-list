const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const taskContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  const taskContainerItem = document.createElement("div");
  taskContainerItem.classList.add("task-item");

  taskContainer.appendChild(taskContainerItem);

  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("fa-regular");
  deleteItem.classList.add("fa-trash-can");

  taskContainerItem.appendChild(taskContent);
  taskContainerItem.appendChild(deleteItem);
};

const handleAddTaskChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleAddTaskChange());
