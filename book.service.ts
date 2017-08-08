import { Injectable } from '@angular/core';

import { Book } from './book';
import { DataObject } from './dataObject';

import { Headers, Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
    constructor(private http: Http){}
    //getBooks(): Promise<Book[]>{
    //    return Promise.resolve(Books);
    //}
    private dataUrl = 'api/data';
    // private booksUrl = 'https://cors-anywhere.herokuapp.com/https://static.inspire.com/api-fun/books.json';  // URL to web api
    getData(): Promise<DataObject>{
  return this.http.get(this.dataUrl)
             .toPromise()
             .then(response => response.json().data.data as DataObject)
             .catch(this.handleError);
        // return Promise.resolve(Books).then(function(result){
        //     return JSON.stringify(result);
        // });
    }

    // getData(): string {
    //     return JSON.stringify(Books);
    // }
    

  

    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}