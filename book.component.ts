import { Component, OnInit } from '@angular/core';

import { Book } from './book'
import { BookService } from './book.service'
import { DataObject } from './dataObject'

@Component({
  selector: 'book',
  templateUrl: './books.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService] 
})

export class BookComponent implements OnInit{
    constructor(private bookService: BookService) { }
    
    // Initializing
    sortBy = '0' // '0' is title, '1' is publish date
    dataObject: DataObject;      
    name = '';
    birthday = '';
    birhtPlace = '';
    testString = "";
    books: Book[];

    ngOnInit(): void {
        this.getData();
    }

    getData(): any{
        return this.bookService.getData().then((data) => {
            this.sorting(data.books);
            this.dataObject = data;            
            return data;
        });
    }

    sorting(list: Book[]): void{
        if(list != null){
            if(this.sortBy == "0"){
                list.sort(function(book1, book2){
                    if ( book1.title < book2.title){
                        return -1;
                    }else if( book1.title > book2.title){
                        return 1;
                    }else{
                        return 0;	
                    }
                })
            }else {
                list.sort(function(book1, book2){
                    if ( book1.PublishDate < book2.PublishDate){
                        return -1;
                    }else if( book1.PublishDate > book2.PublishDate){
                        return 1;
                    }else{
                        return 0;	
                    }
                })
            }
        }
    }    
}
