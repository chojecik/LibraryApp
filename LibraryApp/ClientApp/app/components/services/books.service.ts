import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Book } from '../../models/book';
import { BooksBackendService } from '../../services/books-backend.service';

@Injectable()
export class BooksService {
    constructor(private booksBackendService: BooksBackendService) {}

    addBook(newBook: Book): Observable<number> {
        return this.booksBackendService.addBook(newBook);
    }

    getBook(id: number): Observable<Book> {
        return this.booksBackendService.getBook(id);
    }

    getAllBooks(): Observable<Book[]> {
        return this.booksBackendService.getAllBooks();
    }

    updateBook(updatedBook: Book): Observable<number> { //mozliwe ze tutaj musi byc Book
        return this.booksBackendService.updateBook(updatedBook);
    }

    deleteBook(id: number): Observable<number> {
        return this.booksBackendService.deleteBook(id);
    }


}