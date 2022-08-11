import { data } from "./getElements.js";
import ShowList from "./showList.js";

class ClearCompletedTasks {
  clearCompletedTasks = () => {
    let listArr = [];
    const str = "";
    const listShow = new ShowList();
    const listArrStr = localStorage.getItem("list");
    listArr = JSON.parse(listArrStr);

    for (let length = listArr.length - 1; length >= 0; length--) {
      if (listArr[length].completed === true) {
        listArr.splice(length, 1);
      }
    }

    // Updated index
    const updateData = listArr.filter((updatedIndex, index) => {
      if (updatedIndex.index !== index) {
        updatedIndex.index = index;
      }
      return updatedIndex;
    });

    localStorage.setItem("list", JSON.stringify(updateData));
    data.innerHTML = str;
    listShow.showList();
  };
}

export default ClearCompletedTasks;
