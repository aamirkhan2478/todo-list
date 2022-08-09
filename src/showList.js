import lists from "./list";
import { data } from "./getElements";

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
  });

  data.innerHTML = str;
};

export default ShowList;
