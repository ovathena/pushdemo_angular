import { Component } from '@angular/core';
import { pushService } from './push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular12push';
  constructor(private messagingService: pushService) { }
  ngOnInit() {
    this.messagingService.requestPermission();
  }
}
