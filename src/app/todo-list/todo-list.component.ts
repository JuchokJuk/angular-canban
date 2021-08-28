import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TodoType } from '../todo-type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
@Input() todoType!:TodoType;
  constructor() { }
  
  ngOnInit(): void {
  }

}
