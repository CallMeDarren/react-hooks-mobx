import { action, observable, makeObservable } from "mobx";

class AppStore {
  constructor() {
    makeObservable(this);
  }
  @observable todoList = ["初始化一条"];
  @observable count = 0;

  @action add(parms = "默认事项") {
    this.count += 1;
    this.todoList.push(parms);
  }

  @action minus(index) {
    console.log('index', index);
    if (this.count === 0) return;
    // this.todoList.pop();
    this.todoList.splice(index, 1);
    this.count -= 1;
  }

  @action clear() {
    this.count = 0;
    this.todoList = [];
  }
}
const store = new AppStore();
export default store;
