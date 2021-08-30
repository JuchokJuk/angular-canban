import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoColumnService } from '../todo-column.service';
import { TodoColumn } from '../todo-column';

@Component({
  selector: 'app-new-todo-column-dialog-window',
  templateUrl: './new-todo-column-dialog-window.component.html',
  styleUrls: ['./new-todo-column-dialog-window.component.css']
})

export class NewTodoColumnDialogWindowComponent implements OnInit {
  todoColumnList: TodoColumn[] = [];

  ngOnInit() {
    this.getTodoColumnList();
  }
  getTodoColumnList(): void {
    this.todoColumnService.getTodoColumnList()
      .subscribe(todoColumnList => this.todoColumnList = todoColumnList);
  }

  constructor(private todoColumnService: TodoColumnService) { }
  ;
  createNewTodoColumn(newTodoColumn: string) {
    this.todoColumnList.push(

      {
        id: this.todoColumnList.length,
        title: newTodoColumn,
        items: []
      }

    )
  }
}