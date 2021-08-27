import { Component } from '@angular/core';
import { Page } from './page';
import { Pages } from './pages-list';
import { PageService } from './page.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular kanban todo';

  pages: Page[] = [];

  constructor(private PageService: PageService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getPages();
  }

  getPages(): void {
    this.PageService.getPages()
      .subscribe(pages => this.pages = pages);
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
