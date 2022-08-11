import CompletedList from "./completedTasks.js";
import { data as items } from "./getElements.js";
import RemoveList from "./removeList.js";
import UpdateList from "./updateList.js";

class ShowList {
  showList = () => {
    let listArr = [];
    const removeListData = new RemoveList();
    const completedTask = new CompletedList();
    const updateData = new UpdateList();

    // Check localStorage
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify(listArr));
    } else {
      const listArrStr = localStorage.getItem("list");
      listArr = JSON.parse(listArrStr);
    }

    // Check if array is empty then show this message
    if (listArr.length === 0 || localStorage.getItem("list") === null) {
      const item = document.querySelector("#items");
      const label = document.createElement("label");
      label.htmlFor = "description";
      label.innerHTML = `Data not found`;
      label.style.color = "red";
      item.appendChild(label);
    }

    // Fetch all the data from array
    listArr.map((data) => {
      const { index, description, completed } = data;
      const div = document.createElement("div");
      div.className = "inner-data";
      const innerDiv = document.createElement("div");
      const label = document.createElement("label");
      label.htmlFor = "description";
      label.setAttribute("index", index);
      label.innerHTML = `${description}`;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = description;
      inputField.style.display = "none";
      const removeButton = document.createElement("i");
      removeButton.className = "fa fa-trash-alt";
      const editButton = document.createElement("i");
      editButton.className = "fa fa-ellipsis-v";
      const hr = document.createElement("hr");

      // Remove item from the list
      removeButton.addEventListener("click", () => {
        removeListData.removeList(index);
      });

      // Update completed tasks list
      checkbox.addEventListener("click", () => {
        completedTask.completedList(checkbox, label, listArr, index);
      });

      // Check if the task is completed or not
      if (completed === true) {
        label.style.textDecoration = "line-through";
        checkbox.checked = true;
      } else {
        label.style.textDecoration = "none";
        checkbox.checked = false;
      }

      // Update List
      editButton.addEventListener("click", () => {
        removeButton.style.display = "block";
        editButton.style.display = "none";
        innerDiv.style.display = "none";
        inputField.style.display = "block";
        inputField.focus();
      });

      inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          updateData.updateList(index, inputField.value);
        }
      });

      // Show all elements on DOM
      items.appendChild(div);
      div.appendChild(innerDiv);
      innerDiv.appendChild(checkbox);
      innerDiv.appendChild(label);
      div.appendChild(inputField);
      div.appendChild(removeButton);
      div.appendChild(editButton);
      items.appendChild(hr);

      return data;
    });
  };
}

export default ShowList;
