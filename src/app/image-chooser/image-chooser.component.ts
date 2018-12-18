import { Component, OnInit } from '@angular/core';
import {HttpHeaders,  HttpClient} from '@angular/common/http';
import  'rxjs/Rx';
import {Injectable} from '@angular/core';
let testheader: HttpHeaders= new HttpHeaders() ;
@Component({
  selector: 'app-image-chooser',
  templateUrl: './image-chooser.component.html',
  styleUrls: ['./image-chooser.component.css']
})


export class ImageChooserComponent implements OnInit {
  constructor(private http:HttpClient){
    testheader.set('oui','test')
  }


  ngOnInit() {
  }
  

  voteTad(): void{
     this.http.get('localhost:4200/bob', {headers: testheader}).map((response: Response) => {
      console.log(response.json());
      response.json();
    });

  }


  voteBob(){
    return this.http.get('localhost:4200/tad', {headers: testheader} )
  
}
}