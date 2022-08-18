import showList from "./showList.js";

const updateList = (index) => {
  let listArr = [];

  const listArrStr = localStorage.getItem("list");
  listArr = JSON.parse(listArrStr);

  const updateTask = listArr.filter((item) => {
    item.index === index
      && (item.description = "I will Complete my today's task");

    return item;
  });

  localStorage.setItem("list", JSON.stringify(updateTask));

  showList();
};

export default updateList;
