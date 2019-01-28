import { Component, OnInit } from '@angular/core';
import {HttpHeaders,  HttpClient} from '@angular/common/http';
import {HeaderService} from '../header.service'

import  'rxjs/Rx';

let testheader: HttpHeaders= new HttpHeaders() ;
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  nbVoteTad : number;
  nbVoteBob : number;
  constructor(private http:HttpClient , private headerService: HeaderService) {
    testheader.set("Access-Control-Allow-Origin", "*");
    testheader.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    try{   
     this.http.get('http://127.0.0.1:8080//resultatBob', {headers: this.headerService.getHeader(), responseType: 'text'}).subscribe(data => this.nbVoteBob=parseInt(data));
    }catch(error){
      this.nbVoteBob=0;
    }
    try{
     this.http.get('http://127.0.0.1:8080//resultatTad', {headers: this.headerService.getHeader(), responseType: 'text'}).subscribe(data => this.nbVoteTad=parseInt(data));
    }catch(error){
      this.nbVoteTad=0;
    }
    }

  ngOnInit() {
  }

}
