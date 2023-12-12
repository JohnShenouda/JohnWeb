import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-webstorage';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  myimage2 :any;
  acc_ErrorMessage = 'Error';
  constructor( public storage : LocalStorageService,
    public translate: TranslateService) { }

  ngOnInit(): void {

    this.myimage2 = this.storage.retrieve('stgmyImage');
    if(this.storage.retrieve('stgLanguage') == 'E')
    {
      this.switchEnglish();
    }
    if(this.storage.retrieve('stgLanguage') == 'A')
    {
      this.switchArabic();
    }
  }
  switchArabic(){
    this.translate.use('ar');
    document.documentElement.dir = "rtl";
    this.acc_ErrorMessage = 'خطــأ';
  }
  switchEnglish(){
    this.translate.use('en');
    document.documentElement.dir = "ltr";
    this.acc_ErrorMessage = 'Error';
  }

}
