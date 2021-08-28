import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Page } from './page';
import { pageList } from './page-list';

@Injectable({ providedIn: 'root' })
export class PageService {


    getPages(): Observable<Page[]> {
        const pages = of(pageList);
        return pages;
    }

}