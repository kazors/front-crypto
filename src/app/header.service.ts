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
    
const version = '1'; // version du HashCash
const bits = 5; // nombre de zéro qui par lequel devra commencer le header 
const date = moment().format('YYMMDD'); //date de génération du header
const resource = "test@test.com"; //adresse email
const extension = ''; //extention (ici ingnoré)
const rand = Math.floor(Math.random() * Number.MAX_VALUE) + 1; //chaine de caracère aléatoire
let counter = 0; //compteur
var header;
var hash;
while (counter <  Number.MAX_VALUE) { //on fait une boucle dans laquel le compteur sera incrémenté
     header = `${version}:${bits}:${date}:${resource}:${extension}:${btoa(rand.toString())}:${btoa(counter.toString())}`;
//    On fabrique le header et on l'encode en suivant l'algorythme SHA1    
     hash = sha1(header)
    
    if(hash.startsWith(this.generatePartialPreImage(bits))){ //on teste si le header encodé commence bien 
                                                             // par le nombre de zéro voulu ici 5
      
      break; // si oui on sors de la boucle
    }
    
    counter ++; //si non on incrémente le compteur
}
    return {"HashCash" : hash}; //on ajoute l'information à la requète
  }
  generatePartialPreImage(bits: number): string {
    var preImage="";
    for(var i=0;i<bits;i++){
      preImage+="0"
    }
    return preImage;
  }

  
}
