import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() title!:string;
  @Input() text!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
