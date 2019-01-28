import { Component, OnInit } from '@angular/core';
import {HttpHeaders,  HttpClient} from '@angular/common/http';
import  'rxjs/Rx';
import {HeaderService} from '../header.service'

let testheader: HttpHeaders= new HttpHeaders() ;
@Component({
  selector: 'app-hacker',
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.css']
})
export class HackerComponent implements OnInit {

  constructor(private http:HttpClient , private headerService: HeaderService){
  }

  ngOnInit() {
  }

  voteTad(): void{
    testheader.set("Access-Control-Allow-Origin", "*");
    //testheader.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
     this.http.get('http://127.0.0.1:8080/tad', ({responseType: 'text'})).subscribe(data => console.log(data));
  }

  voteBob(): void {
    testheader.set("Access-Control-Allow-Origin","*");
    //testheader.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    this.http.get('http://127.0.0.1:8080/bob', ({responseType: 'text'})).subscribe(data => console.log(data));
  }
}
