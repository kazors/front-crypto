import { Injectable } from '@angular/core';

import * as moment from 'moment';
import * as sha1 from 'js-sha1';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }


  getHeader() :any {
    const version = '1';
    const bits = 0;
    const date = moment().format('YYMMDD');
    var result;
    const extension = '';
    const rand = Math.floor(Math.random() * Number.MAX_VALUE) + 1;
    let counter = 0;
    while (counter <  Number.MAX_VALUE - 1) {
      const header = `${version}:${bits}:${date}:${extension}:${btoa(rand.toString())}:${btoa(counter.toString())}`;
       result = sha1("");
      if (this.hex2bin(result).startsWith(this.generatePartialPreImage(bits))) {
          console.log(result);
         break;
     }
      counter += 1;
    }
    return {"test" : result};
  }
  generatePartialPreImage(bits: number): string {
    var preImage="";
    for(var i=0;i<bits;i++){
      preImage+="0"
    }
    return preImage;
  }

  hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
  }
}
