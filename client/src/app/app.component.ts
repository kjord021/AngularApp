import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'The Dating App';
  public users: any;

  //Dependency Constructor Injection
  constructor(private http: HttpClient) {

  }

  public ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    //THIS WAY IS DEPRECEATED
    // this.http.get('https://localhost:5001/api/users').subscribe(response => {
    //   this.users = response;
    // }, error => {
    //   console.log(error);
    // });

    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    });
  }
}
