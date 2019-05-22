import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable()
export abstract class BooksBackendService {
    abstract addBook(newBook: Book): Observable<number>;

    abstract getBook(id: number): Observable<Book>;

    abstract getAllBooks(): Observable<Book[]>;

    abstract updateBook(updatedBook: Book): Observable<number>;

    abstract deleteBook(book: Book): Observable<number>;
}