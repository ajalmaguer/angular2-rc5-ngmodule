import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../shared/log.service'

@Component({
  selector: 'app-blah',
  template: `
    <p (click)="test()">
      blah Works!
    </p>
  `,
  styles: []
})
export class BlahComponent implements OnInit {

  constructor(
    private logService: LogService,
    @Inject("blah") test
  ) {
    console.log("i'm printing out test ", test.test)
  }

  ngOnInit() {
    this.logService.writeToLog("I'm from the BlahComponent! :P")
  }

  test() {
    console.log("x was", this.logService.x)
    this.logService.setX(500)
    console.log("x is now", this.logService.x)
  }

}
