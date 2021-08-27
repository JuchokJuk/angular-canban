import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Page } from './page';
import { Pages } from './pages-list';

@Injectable({ providedIn: 'root' })
export class PageService {


    getPages(): Observable<Page[]> {
        const pages = of(Pages);
        return pages;
    }

}