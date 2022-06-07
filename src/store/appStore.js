import { action, observable } from "mobx";

class AppStore {
  @observable todoList = [];
  @action add() {
    console.log('111', 111);
    this.todoList.push("新增一条");
  }
  @action minus() {
    this.todoList.pop();
  }
  @action clear() {
    this.todoList = [];
  }
}
export const store = new AppStore();

