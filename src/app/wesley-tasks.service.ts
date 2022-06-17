import { Injectable } from '@angular/core';
interface Task {
  Nome: string;
}
@Injectable()
export class WesleyTasksService {
  listaTask: Array<Task> = [];
  constructor() {
    if (localStorage.getItem('tarefas')) {
      this.listaTask = JSON.parse(localStorage.getItem('tarefas'));
    } else {
      localStorage.setitem('tarefas', JSON.stringify([]));
    }
  }
  addTask(nome: string) {
    if (nome !== '') {
      this.listaTask.push({ nome: nome });
      localStorage.setitem('tarefas', JSON.stringify(this.listaTask));
    }
  }

  removeTask(index: number) {
    if (this.listaTask != null) {
      this.listaTask.splice(index, 1);
      localStorage.setItem('tarefas', JSON.stringify(this.listaTask));
    }
  }

  getTasks() {
    if (this.listaTask != null) {
      this.listaTask = JSON.parse(localStorage.getItem('tarefas'));
    }
  }
}
