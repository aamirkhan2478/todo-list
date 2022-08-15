import AddList from "./modules/addList.js";
import ClearCompletedTasks from "./modules/clearCompletedTasks.js";
import ShowList from "./modules/showList.js";
import { textBox, clearCompletedTasks } from "./modules/getElements.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  textBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const listAdd = new AddList();
      listAdd.addList();
    }
  });
  clearCompletedTasks.addEventListener("click", () => {
    const clearAllCompleted = new ClearCompletedTasks();
    clearAllCompleted.clearCompletedTasks();
  });

  const listShow = new ShowList();
  listShow.showList();
});
