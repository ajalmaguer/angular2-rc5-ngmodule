import { Component, OnInit } from '@angular/core';
import { LogService } from './shared/log.service'

declare var MC;
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = MC.test;
  blah() {
    console.log('hello')
  }
  constructor(
    private logService: LogService
  ) {}

  ngOnInit() {
    console.log("this is a test")
    this.blah()
    this.logService.writeToLog("hello")
  }

  blergh() {
    console.log("x was", this.logService.x)
    this.logService.setX(0)
    console.log("x is now", this.logService.x)
  }
}
