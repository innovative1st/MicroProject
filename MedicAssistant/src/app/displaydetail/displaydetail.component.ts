import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-displaydetail',
  templateUrl: './displaydetail.component.html',
  styleUrls: ['./displaydetail.component.css']
})
export class DisplaydetailComponent  {
  statementOne = 'Am I a good developer?';
  statementTwo = 'No, I am not';
  isQuestion = true;
  hitCount;
  clickLog = [];
  constructor() { 
    this.hitCount = 1;
  }
 onClick () {
  this.isQuestion = ( (this.isQuestion === true) ?  false : true);

 this.clickLog.push('Switch' + this.hitCount);
   ++this.hitCount;
 

}
  getColor(i: number)
   { if(i === 0 )  {i=2} ;
     return (i % 2 === 0)? 'Blue' : 'white';
   }

}
