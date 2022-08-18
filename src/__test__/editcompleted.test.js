import addList from "../__mock__/addList";
import clearCompletedTasks from "../__mock__/clearCompleted";
import completedList from "../__mock__/completedList";
import updateList from "../__mock__/updateList";

describe("Test for update list tasks", () => {
  it("Check if todo list is updated", () => {
    localStorage.removeItem("list");
    addList("task 1");
    updateList(0);
    const afterUpdate = JSON.parse(localStorage.getItem("list"));

    expect(afterUpdate).toEqual([
      {
        description: "I will Complete my today's task",
        completed: false,
        index: 0,
      },
    ]);
  });

  it("Check if completed is true", () => {
    localStorage.removeItem("list");
    addList("task 1");
    completedList(0);
    const afterUpdate = JSON.parse(localStorage.getItem("list"));
    expect(afterUpdate).toEqual([
      {
        description: "Complete my activities on time",
        completed: true,
        index: 0,
      },
    ]);
  });
});

describe("Test for clear completed list task", () => {
  it("Check completed list task is removed or not", () => {
    localStorage.removeItem("list");
    addList("task 1");
    completedList(0);
    const beforeRemove = JSON.parse(localStorage.getItem("list"));
    clearCompletedTasks();
    const afterRemove = JSON.parse(localStorage.getItem("list"));

    expect(afterRemove.length).toBe(beforeRemove.length - 1);
  });
});
