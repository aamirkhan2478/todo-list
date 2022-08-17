import addList from "../__mock__/addList";

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
