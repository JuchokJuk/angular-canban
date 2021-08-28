import { Component, OnInit } from '@angular/core';
import { TodoType } from '../todo-type';
import { TodoTypeListService } from '../todo-type-list.service';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.css']
})

export class TodoBoardComponent implements OnInit {
  todoTypeList: TodoType[] = [];

  constructor(private todoTypeListService: TodoTypeListService) { }

  ngOnInit(){
    this.getTodoTypeList();
  }
  getTodoTypeList(): void {
    this.todoTypeListService.getTodoTypeList()
      .subscribe(todoTypeList => this.todoTypeList = todoTypeList);
      console.log(this.todoTypeList);
  }
}
