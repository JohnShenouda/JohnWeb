import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UsersModel } from 'src/app/models/UsersModel';
import { UsersService } from 'src/app/services/UsersService';
import { TranslateService } from '@ngx-translate/core';       /// Change Language
import { ImagesService } from 'src/app/services/ImagesService';
import { ImagesModel } from 'src/app/models/ImagesModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  userid = '';
  username = '';
  password = '';
  itpicture = '';
  acc_password='';
  acc_Language ='E';
  acc_ErrorMessage = 'Error';
   Check_User = 'False';
  Check_Password = 'False';

  Check_message1 = '';
  Check_message2 = '';
  Check_message3 = '';
  myimage0 = '';
  sellersPermitString = '';
  Get_Login : boolean = false;
  @Output() submitClicked = new EventEmitter<any>();

  constructor(
 
    public users: UsersModel,
    public usersService: UsersService,
    public storage: LocalStorageService,
    public translate: TranslateService,
    public imagesservice : ImagesService,
    public images :ImagesModel

  ) { }

  ngOnInit(): void {
    //this.retriveCompanyLookupTop();
    this.retrivePicDefult();
  }
  ReLoade(){
    window.location.reload();
  }
  SetLanguage(){
    if(this.acc_Language == 'E')
    {
      this.switchEnglish();
    }
    if(this.acc_Language == 'A')
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


  retriveUsers(event: any) {
    this.usersService.getUser(this.userid).subscribe(
      (data: UsersModel) => {
       
        this.username = data.username;
        this.password = data.password;
        this.myimage0 = data.itpicture;
        this.sellersPermitString = data.itpicture;
        this.myimage0 = this.sellersPermitString;
        this.storage.store('stgmyImage', this.myimage0);
        var kk = this.sellersPermitString;
        //this.retriveGroupDetails();
      }
    );
  }
  retrivePicDefult(){
    this.imagesservice.getImage('John').subscribe(
      (data: ImagesModel) => {

        this.myimage0 = data.itpicture;
        this.sellersPermitString = data.itpicture;
        this.myimage0 = this.sellersPermitString;

        var kk = this.sellersPermitString;

      }
    );
}
  retriveGroupDetails() {

     
  }



  LoginUser() {
    //// =========== Check User ========================
     



     this.Check_message1 = '';
    this.Check_User = 'False';
    if (this.username == null || this.username == "") {
      this.Check_User = 'False'
      if(this.acc_Language == 'E') {this.Check_message1 = 'Invalid User ID  .. '}
      if(this.acc_Language == 'A') {this.Check_message1 = 'تأكد من كود المستخدم  .. '}
 
    } else {
      this.Check_User = 'true'
   }
    //// =========== Check PassWord ===================
    this.Check_Password = 'true';
    this.Check_message2 = '';
     if (this.password == null || this.password == "") {
      console.log(this.password);
      this.username = "Invalid User ID please try again",
        this.Check_Password = 'False'
        if(this.acc_Language == 'E') {this.Check_message2 = 'Invalid Password  .. '}
        if(this.acc_Language == 'A') {this.Check_message2 = 'تأكد من كلمة السر .. '};
    }
    else
    {
      this.Check_Password = 'true';
    } 
   
     

    if(this.Check_User == 'true' && this.Check_Password == 'true')
    {

      this.Get_Login = true;
      this.messageFortest();
    }
    else
    {
      this.Get_Login = false;
      console.log('error');
      this.messageEnglish();
    }
    this.storage.store('stgusername', this.username);
   
    this.storage.store('stgUserId', this.userid);
     
    this.storage.store('stgLanguage', this.acc_Language);
    this.storage.store('stgmyImage', this.myimage0 );
    if(this.acc_Language == 'E') {
      this.storage.store('message_Save', 'Your work has been saved' );
      this.storage.store('message_Delet_Title1', 'Are you sure?' );
      this.storage.store('message_Delet_Title2', "You won't be able to revert this!" );
      this.storage.store('message_Delet_confirmButtonText', "Yes, delete it!" );
      this.storage.store('message_Delet_cancelButtonText', "Cancel" );
      this.storage.store('message_Delet_Done1', "Deleted" );
      this.storage.store('message_Delet_Done2', "Your file has been deleted." );
      this.storage.store('message_Delet_Done3', "success" );
    }
    if(this.acc_Language == 'A') {
      this.storage.store('message_Save', 'تم التسجيل بنجاح' );
      this.storage.store('message_Delet_Title1', 'هل أنت متأكد' );
      this.storage.store('message_Delet_Title2', ' قد لا تستطيع استعادة المعلومة' );
      this.storage.store('message_Delet_confirmButtonText', "نعم, أوافق على الإلغاء!" );
      this.storage.store('message_Delet_cancelButtonText', "خروج" );
      this.storage.store('message_Delet_Done1', "تم الإلغاء" );
      this.storage.store('message_Delet_Done2', "تم إلغاء السجل " );
      this.storage.store('message_Delet_Done3', "بنجــاح" );
    }


  }
  messageEnglish(){
    Swal.fire({
      title: this.acc_ErrorMessage,
      text: this.password + 'Dah Test ' + this.username + ' ' + this.Check_message3,
      icon: 'warning',
      timer: 3000,
    });

    

  }

  messageFortest(){
    Swal.fire({
      title: this.acc_ErrorMessage,
      text:  this.password + 'Dah Test ' + this.username ,
      icon: 'warning',
      timer: 3000,
    });
  }
}
