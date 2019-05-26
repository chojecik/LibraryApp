import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
/** book-details component*/
export class BookDetailsComponent {
    /** book-details ctor */
    constructor(
        private booksService: BooksService,
        private acticatedRoute: ActivatedRoute,
        private location: Location
    ) { };

    pageTitle: string = "Book details";
    urlParam: number = 0;
    isInEditMode: boolean = true;
    book: Book = new Book();

    ngOnInit(): void {
        this.detectUrlParam();

        if (this.location.isCurrentPathEqualTo("/books/book-add")) {
            this.pageTitle = "New book";
        }
        else if (this.location.isCurrentPathEqualTo("/books/book-update/" + this.urlParam)) {
            this.pageTitle = "Update book";
            this.isInEditMode = true;
            this.downloadBook();
        }
        else {
            this.pageTitle = "Book details";
            this.isInEditMode = false;
            this.downloadBook();
        }
    }

    downloadBook(): void {
        this.booksService.getBook(this.urlParam).subscribe(
            bookFromDb => this.book = bookFromDb,
            error => console.log(error)
        );
    }

    onSubmit(book: Book): void {
        if (this.location.isCurrentPathEqualTo("/books/book-add")) {
            this.booksService.addBook(book).subscribe(
                onSuccess => console.log(onSuccess),
                onError => console.log(onError)
            )
        }
        else if (this.location.isCurrentPathEqualTo("/books/book-update")) {
            this.booksService.updateBook(book).subscribe(
                onSuccess => console.log(onSuccess),
                onError => console.log(onError)
            )
        }
    }

    detectUrlParam(): void {
        this.acticatedRoute.params.subscribe(
            (params: Params) => {
                this.urlParam = params['id'];
            }
        ); 
    }

    goBack(): void {
        this.location.back();
    }
}