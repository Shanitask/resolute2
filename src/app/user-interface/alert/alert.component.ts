import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message: string = '';
  type: 'success' | 'error' | 'info' | 'warning' = 'info';
  visible: boolean = false;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    const alert = this.alertService.getMessage();
    this.message = alert.message;
    // this.type = alert.type;
    this.visible = alert.visible;
  }
}