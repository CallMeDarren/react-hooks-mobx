import { action, observable, makeObservable } from "mobx";

class AppStore {
  constructor() {
    makeObservable(this);
  }
  @observable todoList = ["初始化一条"];
  @observable count = 0;

  @action add() {
    this.count += 1;
    this.todoList.push("新增一条");
    console.log("todoList", this.todoList);
  }

  @action minus() {
    if (this.count === 0) return;
    this.todoList.pop();
    this.count -= 1;
  }

  @action clear() {
    this.count = 0;
    this.todoList = [];
  }
}
const store = new AppStore();
export default store;
