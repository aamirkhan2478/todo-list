class CompletedList {
  completedList = (input, label, listArr, index) => {
    if (input.checked === true) {
      label.style.textDecoration = "line-through";
      listArr.filter((update) => {
        if (update.index === index) {
          update.completed = true;
        }
        return update;
      });
      localStorage.setItem("list", JSON.stringify(listArr));
    } else {
      label.style.textDecoration = "none";
      listArr.filter((update) => {
        if (update.index === index) {
          update.completed = false;
        }
        return update;
      });
      localStorage.setItem("list", JSON.stringify(listArr));
    }
  };
}

export default CompletedList;
