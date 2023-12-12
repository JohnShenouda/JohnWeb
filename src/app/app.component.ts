import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'John';
  showHead: boolean = false;
  storage: any;

  constructor(private router: Router,
              ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url == '/') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
