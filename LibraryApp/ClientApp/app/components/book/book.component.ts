import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../services/books.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
/** book component*/
export class BookComponent implements OnInit {

    constructor(private booksService: BooksService) { }

    ngOnInit(): void {
        this.booksService.getAllBooks().subscribe(
            props => {console.log("Books", props) },
            error => {console.log("Error: ", error)}
        );
    }

    test = "Some text";

}