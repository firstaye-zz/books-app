import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { FormControlDirective } from '@angular/forms';
import { RadioControlValueAccessor } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';

import { BookService }  from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
