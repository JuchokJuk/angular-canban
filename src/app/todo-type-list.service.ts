import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TodoType } from './todo-type';
import { TODOTYPELIST } from './todo-type-list';


@Injectable({ providedIn: 'root' })
export class TodoTypeListService {

  constructor() { }

  getTodoTypeList(): Observable<TodoType[]> {
    const todoTypeList = of(TODOTYPELIST);
    return todoTypeList;
  }

  getTodoTypeById(id: number): Observable<TodoType> {
    const todoType = TODOTYPELIST.find(h => h.id === id)!;
    return of(todoType);
  }
}