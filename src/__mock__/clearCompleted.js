import showList from "./showList.js";

const clearCompletedTasks = () => {
  let listArr = [];
  const listArrStr = localStorage.getItem("list");
  listArr = JSON.parse(listArrStr);

  for (let length = listArr.length - 1; length >= 0; length--) {
    listArr[length].completed = true && listArr.splice(length, 1);
  }

  localStorage.setItem("list", JSON.stringify(listArr));
  showList();
};

export default clearCompletedTasks;
