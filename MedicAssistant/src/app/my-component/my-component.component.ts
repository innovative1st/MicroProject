import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls:  ['./my-component.component.css']
})
export class MyComponentComponent {
 visibility=false;
 Message: string = ' Warning:- my-component works!';
  Text = 'Welcome to my-component';
  serverStatus='No server available';
  serverCreated=false
  serverName;
  
  constructor() {
  setTimeout(() =>this.Text= 'You are not new anymore',3000);
    setTimeout(()=>this.visibility= true, 4000);
    }
  onServerCreation()
  {
  this.serverStatus = 'Server-one has been created with name as'.concat(this.serverName);
}
onUpdateServerName(event:Event)
{
  this.serverName = (<HTMLInputElement>event.target).value ;
  this.serverCreated = true;
}
}
