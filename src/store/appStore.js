import { action, observable } from "mobx";

export default class AppStore {
  @observable todoList = [];
  @action add() {
    this.todoList.push("新增一条");
  }
  @action minus() {
    this.todoList.pop();
  }
  @action clear() {
    this.todoList = [];
  }
}

const appStore = new AppStore();
