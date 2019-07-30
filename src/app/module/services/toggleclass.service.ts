import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleClassService {
  private fadeIn = false;
  public toggleClass() {
    this.fadeIn = !this.fadeIn;
  }
  public getClass() {
    return this.fadeIn ? "visible" : "invisible";
  }
}
