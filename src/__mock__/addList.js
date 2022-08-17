import showList from "./showList";

const addList = () => {
  let listArr = [];
  listArr.push(
    {
      description: "Complete my activities on time",
      completed: false,
      index: 0,
    },
    {
      description: "Completed my project",
      completed: true,
      index: 1,
    }
  );
  localStorage.setItem("list", JSON.stringify(listArr));
  showList();
};

export default addList;
