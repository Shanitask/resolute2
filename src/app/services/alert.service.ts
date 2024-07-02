import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private message: string = '';
  private type: 'success' | 'error' | 'info' | 'warning' = 'info';
  private visible: boolean = false;

  getMessage(): { message: string, type: string, visible: boolean } {
    return { message: this.message, type: this.type, visible: this.visible };
  }

  setMessage(message: string, type: 'success' | 'error' | 'info' | 'warning') {
    this.message = message;
    this.type = type;
    this.visible = true;

    // Hide the message after 3 seconds (optional)
    setTimeout(() => this.clearMessage(), 3000);
  }

  clearMessage() {
    this.message = '';
    this.type = 'info';
    this.visible = false;
  }
}
