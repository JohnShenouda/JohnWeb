import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myimage='';
  constructor(
    public storage : LocalStorageService
  ) { }

  ngOnInit(): void {
    //this.myimage = this.storage.retrieve('stgmyImage');
  }

}
