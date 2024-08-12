import { Component } from '@angular/core';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-book-create',
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent {

  constructor(private service: BookStoreService, private router: Router) {}

  create(book: Book) {
    this.service.create(book).subscribe(createdBook => {
      this.router.navigate(['/books', createdBook.isbn]);
    });
  }

}
