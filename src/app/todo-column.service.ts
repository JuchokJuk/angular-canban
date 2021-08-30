import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TodoColumn } from './todo-column';
import { TODOCOLUMNLIST } from './todo-column-list';


@Injectable({ providedIn: 'root' })
export class TodoColumnService {

  constructor() { }

  getTodoColumnList(): Observable<TodoColumn[]> {
    const todoColumnList = of(TODOCOLUMNLIST);
    return todoColumnList;
  }

  //getTodoColumnById(id: number): Observable<TodoColumn> {
  //  const todoColumn = TODOCOLUMNLIST.find(h => h.id === id)!;
  //  return of(todoColumn);
  //}
}