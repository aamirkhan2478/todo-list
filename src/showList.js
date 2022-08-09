import lists from "./list.js";
import data from "./getElements.js";

const ShowList = () => {
  let str = "";
  lists.map((list) => {
    const { description, completed, index } = list;
    str += `
            <li><span>Id:</span> ${index}</li>
            <li><span>Description:</span> ${description}</li>
            <li><span>Completed:</span> ${completed}</li>
            <hr/>
        `;
    return str;
  });

  data.innerHTML = str;
};

export default ShowList;
