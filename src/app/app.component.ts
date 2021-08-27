import { Component } from '@angular/core';
import { Page } from './page';

import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular kanban todo';

  pages: Page[] = [];

  constructor(private PageService: PageService) { }

  ngOnInit() {
    this.getPages();
  }

  getPages(): void {
    this.PageService.getPages()
      .subscribe(pages => this.pages = pages);
  }

}
