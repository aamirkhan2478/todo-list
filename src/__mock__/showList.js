const showList = () => {
  let listArr = [];

  const listArrStr = localStorage.getItem("list");
  listArr = JSON.parse(listArrStr);

  listArr.map((data) => {
    const { index, description } = data;
    const div = document.createElement("div");
    div.className = "inner-data";
    const innerDiv = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = `description-${index}`;
    label.setAttribute("id", index);
    label.innerHTML = `${description}`;
    label.className = "description";
    div.appendChild(innerDiv);
    innerDiv.appendChild(label);
    return data;
  });
};

export default showList;
