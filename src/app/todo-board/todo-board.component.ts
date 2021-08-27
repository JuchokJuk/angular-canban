import { Component, OnInit } from '@angular/core';

  interface Filter {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.css']
})

export class TodoBoardComponent implements OnInit {
  selectedValue!: string;
  todoType!:string;

  constructor() { }

  ngOnInit(): void {
  }



  foods: Filter[] = [
    {value: 'day', viewValue: 'This day'},
    {value: 'week', viewValue: 'This week'},
    {value: 'month', viewValue: 'This month'},
    {value: 'year', viewValue: 'This year'}
  ];
  todoTypes: string[] = [
    'To do',
    'In progress',
    'Completed',
    'custom#1',
    'custom#2',
    'custom#3'
  ];
}
