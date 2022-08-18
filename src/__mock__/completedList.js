const completedList = (index) => {
  let listArr = [];

  const listArrStr = localStorage.getItem("list");
  listArr = JSON.parse(listArrStr);
  listArr.filter((update) => {
    update.index === index && (update.completed = true);

    return update;
  });
  localStorage.setItem("list", JSON.stringify(listArr));
};
export default completedList;
