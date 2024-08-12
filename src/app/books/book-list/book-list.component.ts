import { Component } from '@angular/core';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

@Component({
  selector: 'bm-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  imports: [AsyncPipe, NgFor, NgIf, BookListItemComponent]
})
export class BookListComponent {
  
  books$: Observable<Book[]>;

  constructor(private service: BookStoreService) {
    this.books$ = service.getAll();
  }
}
