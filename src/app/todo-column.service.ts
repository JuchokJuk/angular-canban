import { Injectable } from '@angular/core';
import { TodoColumn } from './todo-column';

@Injectable({ providedIn: 'root' })
export class TodoColumnService {
  myTodoColumnList = [
    {
      id: 0,
      title: 'Нужно сделать',
      items: [{
        id: 0,
        title: 'полить цветы',
        text: 'гибискус, гладиолус, геацинт'
      }, {
        id: 1,
        title: 'покормить животных',
        text: 'кошку и собаку'
      }]
    },
    {
      id: 1,
      title: 'В разработке',
      items: [{
        id: 0,
        title: 'сделать салат',
        text: 'цезарь'
      }]
    },
    {
      id: 2,
      title: 'Готово',
      items: []
    }
  ];
  constructor() {

  }

  getTodoColumnList(): TodoColumn[] {
    return this.myTodoColumnList;
  }
  deleteTodoColumn() {
    this.myTodoColumnList.length = 0;

    console.log(this.myTodoColumnList);

    return this.myTodoColumnList;
  }
  addTodoColumn(ColumnTitle: string) {
    this.myTodoColumnList.push({
      id: this.myTodoColumnList.length,
      title: ColumnTitle,
      items: []
    })
    console.log(this.myTodoColumnList);
  }
  //getTodoColumnById(id: number): Observable<TodoColumn> {
  //  const todoColumn = TODOCOLUMNLIST.find(h => h.id === id)!;
  //  return of(todoColumn);
  //}
}