import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common/book';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/books";

  

  constructor(private HttpClient: HttpClient) { }

  getBooks(theCategoryId : number):Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/category/${theCategoryId}`;
    console.log(searchUrl);
    return this.getBooksList(searchUrl);

  }

  

  searchBooks(keyword : string):Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/${keyword}`;
    return this.getBooksList(searchUrl);

  }

  getBook(bookId: number):Observable<Book>{
    const bookDetailsUrl = `${this.baseUrl}/${bookId}`; 
    console.log(bookDetailsUrl);
    return this.HttpClient.get<Book>(bookDetailsUrl);
  }

  /**
   * 
   */
  private getBooksList(searchUrl : string): Observable<Book[]> {
    return this.HttpClient.get<Book[]>(searchUrl);
  }
}

