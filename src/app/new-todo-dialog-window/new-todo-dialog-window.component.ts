import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoTypeListService } from '../todo-type-list.service';
import { TodoType } from '../todo-type';
import { Input } from '@angular/core';


@Component({
  selector: 'app-new-todo-dialog-window',
  templateUrl: './new-todo-dialog-window.component.html',
  styleUrls: ['./new-todo-dialog-window.component.css']
})
export class NewTodoDialogWindowComponent implements OnInit {
  @Input()

  todoType!: TodoType;

  constructor(private todoTypeListService: TodoTypeListService, @Inject(MAT_DIALOG_DATA) public todoTypeId: any) { };

  ngOnInit() {
    this.getTodoTypeById();
  }
  getTodoTypeById(): void {
    const id:number = this.todoTypeId;
    this.todoTypeListService.getTodoTypeById(id)
      .subscribe(todoType => this.todoType = todoType);
  }

  createTodo(newTodoTitle: string, newTodoText: string) {
   
    this.todoType.items.push(
      {
        id: this.todoType.items.length,
        title: newTodoTitle,
        text: newTodoText
      }

    )
  }

}