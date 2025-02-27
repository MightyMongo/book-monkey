import { Component, Input } from '@angular/core';

import { Book } from '../../shared/book';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IsbnPipe } from '../../shared/isbn.pipe';

@Component({
  selector: 'bm-book-list-item',
  standalone: true,
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css',
  imports: [NgFor, NgIf, RouterLink, IsbnPipe]
})
export class BookListItemComponent {
  @Input() book?: Book;
}
