import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5132/api/users').subscribe({
      next: response => this.users = response, 
      error: error => console.log(error),
      complete: () => console.log("request completed")
    })
  }
  
}
 