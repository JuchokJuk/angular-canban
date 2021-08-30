import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoColumnService } from '../todo-column.service';
import { TodoColumn } from '../todo-column';


@Component({
  selector: 'app-edit-todo-column-dialog-window',
  templateUrl: './edit-todo-column-dialog-window.component.html',
  styleUrls: ['./edit-todo-column-dialog-window.component.css']
})
export class EditTodoColumnDialogWindowComponent implements OnInit {
  constructor(private todoColumnService: TodoColumnService, @Inject(MAT_DIALOG_DATA) public todoColumn: any) { };
  ngOnInit() {
    
  }

  editTodoColumn(editedTitle: string) {
    this.todoColumn.title = editedTitle;
  }
}