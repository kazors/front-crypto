import { Injectable } from '@angular/core';

import * as moment from 'moment';
import * as sha1 from 'js-sha1';
//import * as crypto from 'crypto'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }


  getHeader() :any {
    
    const version = '1';
    const bits = 1;
const date = moment().format('YYMMDD');
const resource = "test";
const extension = '';
const rand = Math.floor(Math.random() * Number.MAX_VALUE) + 1;
let counter = 0;
var header;
while (counter <  Number.MAX_VALUE) {
     header = `${version}:${bits}:${date}:${resource}:${extension}:${btoa(rand.toString())}:${btoa(counter.toString())}`;
    //const result = crypto.createHash('sha1').update(header).digest('hex');
    const hash = sha1(header)
    //console.log("1 : "+ result)
    console.log("é : "+ hash);
    if(hash.startsWith(this.generatePartialPreImage(bits))){
      break;
    }
    /*if (result.startsWith(this.generatePartialPreImage(bits))) {
        console.log(result);
        break;
    }
    counter += 1;*/
    counter ++;
}
    return {"test" : "test"};
  }
  generatePartialPreImage(bits: number): string {
    var preImage="";
    for(var i=0;i<bits;i++){
      preImage+="0"
    }
    return preImage;
  }

  hex2bin(hex){
    console.log("test");
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
  }
}
