import { textBox, data, errorMessage,clearCompletedTasks } from "./getElements.js";
import List from "./listObj.js";
import ShowList from "./showList.js";

class AddList {
  addList = () => {
    let listArr = [];
    let str = "";
    const description = textBox.value;
    const newArr = JSON.parse(localStorage.getItem("list"));
    const list = new List(newArr.length, description);
    const listShow = new ShowList();
    // Check if title and author field is empty or not
    if (textBox.value === "") {
      errorMessage.classList.add("show-message");
    } else {
      if (localStorage.getItem("list") === null) {
        listArr.push(list);
        localStorage.setItem("list", JSON.stringify(listArr));
      } else {
        const listArrStr = localStorage.getItem("list");
        listArr = JSON.parse(listArrStr);
        listArr.push(list);
        localStorage.setItem("list", JSON.stringify(listArr));
      }
      textBox.value = "";
      str = "";
      data.innerHTML = str;
      listShow.showList();
      clearCompletedTasks.style.display = "block";
    }
    setTimeout(() => {
      errorMessage.classList.remove("show-message");
    }, 2500);
  };
}

export default AddList;
