import { Routes } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';

export const BOOK_ROUTES: Routes = [
  {
    path: '',
    component: BookListComponent,
    title: 'books'
  },
  {
    path: ':isbn',
    component: BookDetailsComponent,
    title: 'book details'
  }
];
