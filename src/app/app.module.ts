import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { URLsConfig } from './URLsConfig';
import { UsersModel } from './models/UsersModel';
import { UsersService } from './services/UsersService';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient } from '@angular/common/http';                         //// for change languges
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';   //// for change languges
import { TranslateHttpLoader } from '@ngx-translate/http-loader';         //// for change languges
import { MaterialModule } from './shared/material/material.module';
 
 import { MatSidenavModule } from '@angular/material/sidenav';
 import { BarcodeGenerator, BarcodeGeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { UsersComponent } from './components/users/users.component';
import { UsersSearchComponent } from './components/users-search/users-search.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridEditIconComponent } from './components/grid-edit-icon/grid-edit-icon.component';
import { GridDeleteIconComponent } from './components/grid-delete-icon/grid-delete-icon.component';
import { ImagesModel } from './models/ImagesModel';
import { ImagesService } from './services/ImagesService';
import { GridSerialsIconComponent } from './components/grid-serials-icon/grid-serials-icon.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';

  

export function createTranslateLoader(http: HttpClient) {                 //// for change languges
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');        //// for change languges
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    HeaderComponent,
    UsersComponent,
    UsersSearchComponent,
    
      
    

  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AgGridModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    MatSidenavModule,
    HttpClientModule,
    ReportViewerModule,
    NgxWebstorageModule.forRoot(),
    //// for change languges
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
    ///// for change languges
  ],
  providers: [
    URLsConfig,

    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    
    UsersModel, UsersService,
    ImagesModel, ImagesService,
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
