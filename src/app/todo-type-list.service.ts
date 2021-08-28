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
  
}