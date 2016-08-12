import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  x: number = 0

  constructor() { }

  writeToLog(message: string) {
    console.log("TEST:", message)
  }

  setX(x: number) {
    this.x = x
  }

}
