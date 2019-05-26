import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BooksBackendService } from '../services/books-backend.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Injectable()
export class HttpBookBackendService extends BooksBackendService {
    private addBookUrl: string = "api/book/addbook";
    private getAllBooksUrl: string = "api/book/getallbooks";
    private getBookUrl: string = "api/book/getbook?bookId=";
    private updateBookUrl: string = "api/book/updatebook";
    private deleteBookUrl: string = "api/book/deletebook?bookId=";

    private jsonContentOptions: RequestOptions;

    constructor(private http: Http) {
        super();
        let headersJson: Headers = new Headers({
            'Content-Type': 'application/json',
        });
        this.jsonContentOptions = new RequestOptions({ headers: headersJson })
    }

    addBook(newBook: Book): Observable<number> {
        return this.http.post(this.addBookUrl, JSON.stringify(newBook), this.jsonContentOptions).map(response => response.json() as number);
    }
    getBook(id: number): Observable<Book> {
        return this.http.get(this.getBookUrl + id, this.jsonContentOptions).map(response => response.json());
    }
    getAllBooks(): Observable<Book[]> {
        return this.http.get(this.getAllBooksUrl, this.jsonContentOptions).map(response => response.json()); 
    }
    updateBook(updatedBook: Book): Observable<number> {
        return this.http.put(this.updateBookUrl, JSON.stringify(updatedBook), this.jsonContentOptions).map(response => response.json() as number); 
    }
    deleteBook(id: number): Observable<number> {
        return this.http.get(this.deleteBookUrl + id, this.jsonContentOptions).map(response => response.json());
    }
    



}