import { Component, OnInit } from '@angular/core';
import {HttpHeaders,  HttpClient} from '@angular/common/http';
import  'rxjs/Rx';
import {HeaderService} from '../header.service'
import {Injectable} from '@angular/core';
import { config } from 'rxjs/Rx';
import * as sha1 from 'js-sha1';

let testheader: HttpHeaders= new HttpHeaders() ;
@Component({
  selector: 'app-image-chooser',
  templateUrl: './image-chooser.component.html',
  styleUrls: ['./image-chooser.component.css']
})


export class ImageChooserComponent implements OnInit {
  constructor(private http:HttpClient , private headerService: HeaderService){
    
    
    
  }


  ngOnInit() {
  }
  

  voteTad(): void{
    testheader.set("Access-Control-Allow-Origin", "*");
    testheader.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
     this.http.get('http://127.0.0.1:8080/tad', {headers: this.headerService.getHeader(), responseType: 'text'}).subscribe(data => console.log("bite"));
    
    
    
  }

   

  voteBob(){
    
  
}
}