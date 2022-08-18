import addList from "../__mock__/addList.js";
import removeList from "../__mock__/removeList.js";

describe("Test for adding tasks", () => {
  it("Check array of object is not null", () => {
    localStorage.removeItem("list");
    addList("task 1");
    const lists = JSON.parse(localStorage.getItem("list"));
    const SIZE = lists.length;
    expect(SIZE).not.toBeNull();
  });

  it("Added to the DOM", () => {
    localStorage.removeItem("list");
    addList("task 2");
    const list = JSON.parse(localStorage.getItem("list"));
    expect(list).toHaveLength(list.length);
  });
});

describe("Test for removing list", () => {
  it("Check list if remove todo size reduces or not", () => {
    localStorage.removeItem("list");
    addList("task 4");
    const lists = JSON.parse(localStorage.getItem("list"));
    const SIZE = lists.length;
    removeList("task 5");
    const newLists = JSON.parse(localStorage.getItem("list"));
    const NEW_SIZE = newLists.length;
    expect(NEW_SIZE).toBe(SIZE - 1);
  });
  it("Check is localStorage updated after remove", () => {
    localStorage.removeItem("list");
    addList("task 5");
    const beforeRemove = JSON.parse(localStorage.getItem("list"));
    removeList("task 6");
    const afterRemove = JSON.parse(localStorage.getItem("list"));
    expect(afterRemove.length).toBe(beforeRemove.length - 1);
  });
});
