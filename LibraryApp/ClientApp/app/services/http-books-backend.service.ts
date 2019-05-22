import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BooksBackendService } from '../services/books-backend.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

//@Injectable()
//export class HttpBookBackendService extends BooksBackendService {
//    private addBookUrl: string = "api/book/addbook";
//    private getAllBooksUrl: string = "api/book/getallbooks";
//    private getBookUrl: string = "api/book/getbook?bookId=";
//    private updateBookUrl: string = "api/book/updatebook?bookId=";
//    private deleteBookUrl: string = "api/book/deletebook?bookId=";

//}