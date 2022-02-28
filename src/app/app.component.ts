import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}
  ngOnInit(): void {
   alert('On Init');
   alert("container");
   alert('dockerhub updated images');
    this.http.get('http://3.110.223.63:5001/weatherforecast').subscribe(
      (result) =>{
        result ?alert('hello'): alert('false');
      });

      this.http.get('https://3.110.223.63:5004/weatherforecast').subscribe(
      (result) =>{
        result ?alert('hello222'): alert('false2222');
      });
  }
  title = 'UI';
}