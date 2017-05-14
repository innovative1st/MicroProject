import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ServerComponent} from './server/server.component';
import { DisplaydetailComponent } from './displaydetail/displaydetail.component';

@NgModule({
  declarations: [
    AppComponent,
   // MyComponentComponent,
    //ServerComponent,
   // DisplaydetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
