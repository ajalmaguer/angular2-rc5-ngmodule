import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LogService } from './shared/log.service';
import { BlahComponent } from './blah/blah.component';
import { ContactComponent } from './contact/contact.component'
import { _MC } from './shared/_MC'

declare var MC;
console.log(MC)
console.log(_MC.toString())

@NgModule({
  declarations: [ // all the components go here
    AppComponent, BlahComponent, ContactComponent
  ],
  imports: [
    BrowserModule, // ng module, not es6 modules
    FormsModule
  ],
  providers: [
    {provide: LogService, useClass: LogService},
    {provide: "blah", useValue: MC}
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
