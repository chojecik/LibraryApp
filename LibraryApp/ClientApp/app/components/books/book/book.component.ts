import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
/** book component*/
export class BookComponent implements OnInit {

    constructor(
        private booksService: BooksService,
        private router: Router
    ) { };

    books: Array<Book> = new Array<Book>();
    pageTitle: string = "List of books";
    tableEmptyInfo: string = "Loading...";
    
    ngOnInit(): void {
        this.downloadBooks();
    }

    downloadBooks(): void {
        this.booksService.getAllBooks().subscribe(
            booksFromDb => {
                if (booksFromDb.length == 0) {
                    this.tableEmptyInfo = "Records not found";
                }
                else {
                    this.books = booksFromDb;
                }
            },
            error => console.log(error)
        )
    }

    getBook(id: number): void {
        this.router.navigate(['/books/book-details', id]);
    }

    updateBook(id: number): void {
        this.router.navigate(['/books/book-update', id]);
    }

    deleteBook(id: number): void {
        this.booksService.deleteBook(id).subscribe(
            onSuccess => console.log(onSuccess),
            onError => console.log(onError)
        );
        this.books.splice(this.books.findIndex(book => book.id == id), 1);
    }


}