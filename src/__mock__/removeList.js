import showList from "./showList.js";

const removeList = (id) => {
  let listArr = [];
  const listArrStr = localStorage.getItem("list");
  listArr = JSON.parse(listArrStr);
  listArr.splice(id, 1);

  localStorage.setItem("list", JSON.stringify(listArr));
  showList();
};

export default removeList;
