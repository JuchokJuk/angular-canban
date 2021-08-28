import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoTypeListService } from '../todo-type-list.service';
import { TodoType } from '../todo-type';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})

export class DialogWindowComponent implements OnInit {
  todoTypeList: TodoType[] = [];

  ngOnInit() {
    this.getTodoTypeList();
  }
  getTodoTypeList(): void {
    this.todoTypeListService.getTodoTypeList()
      .subscribe(todoTypeList => this.todoTypeList = todoTypeList);
    console.log(this.todoTypeList);
  }

  constructor(private todoTypeListService: TodoTypeListService) { }
  ;
  createTodoType(newTodoType: string) {
    console.log(newTodoType)
    console.log(this.todoTypeList.length)
    this.todoTypeList.push(

      {
        id: this.todoTypeList.length + 1,
        title: newTodoType,
        items: []
      }

    )
  }
}