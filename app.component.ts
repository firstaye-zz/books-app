import { Component, OnInit } from '@angular/core';

import { Book } from './book'
import { BookService } from './book.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService] 
})
export class AppComponent {

}
