import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/models/UsersModel';
import { UsersService } from 'src/app/services/UsersService';
import { UsersSearchComponent } from '../users-search/users-search.component';
import { LocalStorageService } from 'ngx-webstorage';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

import { DomSanitizer } from '@angular/platform-browser';
import { ImagesService } from 'src/app/services/ImagesService';
import { ImagesModel } from 'src/app/models/ImagesModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  recid = '' ;
fullname = '' ;
area = '' ;
sub_area = '' ;
relation = '' ;
gender = '' ;
service = '' ;
floor = '' ;
notes = '' ;
ser = '' ;
married = '' ;
tripsattend = '' ;
usechair = '' ;
needhelp = '' ;
sleepwith = '' ;
phone = '' ;
address = '' ;
retardation = '' ;
dob = '' ;
listening = '' ;
seeing = '' ;
speaking = '' ;
eating = '' ;
medicine = '' ;
crisis = '' ;
healthy = '' ;
listen = '' ;
speak = '' ;
eat = '' ;
see = '' ;
health = '' ;
medicaments = '' ;
panic = '' ;
age = '' ;
retardationreason = '' ;
study = '' ;
job = '' ;
parents = '' ;
marital = '' ;
confession = '' ;
ziina = '' ;
entrydate = '' ;
hellp = '' ;
number_of_hellpers = '' ;
groups = '' ;
needcar = '' ;
userid = '' ;
username = '' ;
password = '' ;
itpicture = '' ;
myimage1 = '';

  modifiedDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  imageSrc :any;

  imageSource: any;

  sellersPermitFile: any;
  sellersPermitString = '';
  constructor(public usersService: UsersService,
    public users: UsersModel,
    public storage: LocalStorageService,
    public usersSelectedData: UsersModel,                ///----------- for searching pop up -----------
    private dialogref: MatDialog,
    private sanitizer: DomSanitizer ,
    public imagesservice : ImagesService,
    public images : ImagesModel,                    ///----------- for searching pop up -----------
 ) { }

  ngOnInit(): void {
    this. retrivePicDefult();

  }

  retriveUsers() {
    this.usersService.getUser(this.userid).subscribe((data: UsersModel) => {

      this.recid= data.recid;
      this.fullname= data.fullname;
      this.area= data.area;
      this.sub_area= data.sub_area;
      this.relation= data.relation;
      this.gender= data.gender;
      this.service= data.service;
      this.floor= data.floor;
      this.notes= data.notes;
      this.ser= data.ser;
      this.married= data.married;
      this.tripsattend= data.tripsattend;
      this.usechair= data.usechair;
      this.needhelp= data.needhelp;
      this.sleepwith= data.sleepwith;
      this.phone= data.phone;
      this.address= data.address;
      this.retardation= data.retardation;
      this.dob= data.dob;
      this.listening= data.listening;
      this.seeing= data.seeing;
      this.speaking= data.speaking;
      this.eating= data.eating;
      this.medicine= data.medicine;
      this.crisis= data.crisis;
      this.healthy= data.healthy;
      this.listen= data.listen;
      this.speak= data.speak;
      this.eat= data.eat;
      this.see= data.see;
      this.health= data.health;
      this.medicaments= data.medicaments;
      this.panic= data.panic;
      this.age= data.age;
      this.retardationreason= data.retardationreason;
      this.study= data.study;
      this.job= data.job;
      this.parents= data.parents;
      this.marital= data.marital;
      this.confession= data.confession;
      this.ziina= data.ziina;
      this.entrydate= data.entrydate;
      this.hellp= data.hellp;
      this.number_of_hellpers= data.number_of_hellpers;
      this.groups= data.groups;
      this.needcar= data.needcar;
      this.userid= data.userid;
      this.username= data.username;
      this.password= data.password;
      
      
      
      
      this.retrivePic();
       }

    );
  }
 retrivePic(){
  this.usersService.getUser(this.userid).subscribe((data: UsersModel) => {
    this.myimage1 = data.itpicture;
    this.sellersPermitString =  data.itpicture;
    this.myimage1 =this.sellersPermitString;
    var kk = this.sellersPermitString;

    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.sellersPermitString);

  }

  );
 }

  submitUsers() {
   this.users.recid=this.recid;
this.users.fullname=this.fullname;
this.users.area=this.area;
this.users.sub_area=this.sub_area;
this.users.relation=this.relation;
this.users.gender=this.gender;
this.users.service=this.service;
this.users.floor=this.floor;
this.users.notes=this.notes;
this.users.ser=this.ser;
this.users.married=this.married;
this.users.tripsattend=this.tripsattend;
this.users.usechair=this.usechair;
this.users.needhelp=this.needhelp;
this.users.sleepwith=this.sleepwith;
this.users.phone=this.phone;
this.users.address=this.address;
this.users.retardation=this.retardation;
this.users.dob=this.dob;
this.users.listening=this.listening;
this.users.seeing=this.seeing;
this.users.speaking=this.speaking;
this.users.eating=this.eating;
this.users.medicine=this.medicine;
this.users.crisis=this.crisis;
this.users.healthy=this.healthy;
this.users.listen=this.listen;
this.users.speak=this.speak;
this.users.eat=this.eat;
this.users.see=this.see;
this.users.health=this.health;
this.users.medicaments=this.medicaments;
this.users.panic=this.panic;
this.users.age=this.age;
this.users.retardationreason=this.retardationreason;
this.users.study=this.study;
this.users.job=this.job;
this.users.parents=this.parents;
this.users.marital=this.marital;
this.users.confession=this.confession;
this.users.ziina=this.ziina;
this.users.entrydate=this.entrydate;
this.users.hellp=this.hellp;
this.users.number_of_hellpers=this.number_of_hellpers;
this.users.groups=this.groups;
this.users.needcar=this.needcar;
this.users.userid=this.userid;
this.users.username=this.username;
this.users.password=this.password;
this.users.itpicture=this.itpicture;


    //this.users.userid1 = this.storage.retrieve('stguserId');
    //this.users.modifieddate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    //this.users.compcode = this.storage.retrieve('stgcompCode');
     console.log("users : "+ this.users.username);
    
    
     this.usersService.AddUser(this.users).subscribe(data => {
      this.submitPic();
      this.mesgSave();
    },

      error => { alert(error); }

    );

  }
  submitPic(){
    this.users.userid = this.userid;

    this.users.userid = this.storage.retrieve('stguserId');
    //this.users.modifieddate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.users.itpicture = this.sellersPermitString;
    //this.users.compcode = this.storage.retrieve('stgcompCode');

    this.usersService.AddUserPic(this.users).subscribe(data => {


      this.mesgSave();
    },

      error => { alert(error); }

    );
   }
  NewData() {
   this.recid='';
this.fullname='';
this.area='';
this.sub_area='';
this.relation='';
this.gender='';
this.service='';
this.floor='';
this.notes='';
this.ser='';
this.married='';
this.tripsattend='';
this.usechair='';
this.needhelp='';
this.sleepwith='';
this.phone='';
this.address='';
this.retardation='';
this.dob='';
this.listening='';
this.seeing='';
this.speaking='';
this.eating='';
this.medicine='';
this.crisis='';
this.healthy='';
this.listen='';
this.speak='';
this.eat='';
this.see='';
this.health='';
this.medicaments='';
this.panic='';
this.age='';
this.retardationreason='';
this.study='';
this.job='';
this.parents='';
this.marital='';
this.confession='';
this.ziina='';
this.entrydate='';
this.hellp='';
this.number_of_hellpers='';
this.groups='';
this.needcar='';
this.userid=this.storage.retrieve('stguserId');
this.username='';
this.password='';
this.itpicture='';

    //this.compcode = this.storage.retrieve('stgcompCode');
   // this.userid1 = this.storage.retrieve('stguserId');
    //this.modifieddate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.retrivePicDefult();
  }
  deleteUsers() {                                                   ///----------- for searching pop up -----------
    this.usersService.DelUser(this.userid).subscribe(
      (data: UsersModel) => {
 
        this.recid= data.recid;
this.fullname= data.fullname;
this.area= data.area;
this.sub_area= data.sub_area;
this.relation= data.relation;
this.gender= data.gender;
this.service= data.service;
this.floor= data.floor;
this.notes= data.notes;
this.ser= data.ser;
this.married= data.married;
this.tripsattend= data.tripsattend;
this.usechair= data.usechair;
this.needhelp= data.needhelp;
this.sleepwith= data.sleepwith;
this.phone= data.phone;
this.address= data.address;
this.retardation= data.retardation;
this.dob= data.dob;
this.listening= data.listening;
this.seeing= data.seeing;
this.speaking= data.speaking;
this.eating= data.eating;
this.medicine= data.medicine;
this.crisis= data.crisis;
this.healthy= data.healthy;
this.listen= data.listen;
this.speak= data.speak;
this.eat= data.eat;
this.see= data.see;
this.health= data.health;
this.medicaments= data.medicaments;
this.panic= data.panic;
this.age= data.age;
this.retardationreason= data.retardationreason;
this.study= data.study;
this.job= data.job;
this.parents= data.parents;
this.marital= data.marital;
this.confession= data.confession;
this.ziina= data.ziina;
this.entrydate= data.entrydate;
this.hellp= data.hellp;
this.number_of_hellpers= data.number_of_hellpers;
this.groups= data.groups;
this.needcar= data.needcar;
this.userid= data.userid;
this.username= data.username;
this.password= data.password;
this.itpicture= data.itpicture;

      }
    );
  }
  openDialog() {
    const dialogRef = this.dialogref.open(UsersSearchComponent,
      {
        data: {
          dataKey: this.usersSelectedData
        }
      });
    dialogRef.afterClosed().subscribe(result => {
    });

    const dialogSubmitSubscription =
      dialogRef.componentInstance.submitClicked.subscribe(result => {
        this.recid = result.recid;
        this.fullname = result.fullname;
        this.area = result.area;
        this.sub_area = result.sub_area;
        this.relation = result.relation;
        this.gender = result.gender;
        this.service = result.service;
        this.floor = result.floor;
        this.notes = result.notes;
        this.ser = result.ser;
        this.married = result.married;
        this.tripsattend = result.tripsattend;
        this.usechair = result.usechair;
        this.needhelp = result.needhelp;
        this.sleepwith = result.sleepwith;
        this.phone = result.phone;
        this.address = result.address;
        this.retardation = result.retardation;
        this.dob = result.dob;
        this.listening = result.listening;
        this.seeing = result.seeing;
        this.speaking = result.speaking;
        this.eating = result.eating;
        this.medicine = result.medicine;
        this.crisis = result.crisis;
        this.healthy = result.healthy;
        this.listen = result.listen;
        this.speak = result.speak;
        this.eat = result.eat;
        this.see = result.see;
        this.health = result.health;
        this.medicaments = result.medicaments;
        this.panic = result.panic;
        this.age = result.age;
        this.retardationreason = result.retardationreason;
        this.study = result.study;
        this.job = result.job;
        this.parents = result.parents;
        this.marital = result.marital;
        this.confession = result.confession;
        this.ziina = result.ziina;
        this.entrydate = result.entrydate;
        this.hellp = result.hellp;
        this.number_of_hellpers = result.number_of_hellpers;
        this.groups = result.groups;
        this.needcar = result.needcar;
        this.userid = result.userid;
        this.username = result.username;
        this.password = result.password;
        this.itpicture = result.itpicture;
   
        

        this.retrivePic();
        dialogSubmitSubscription.unsubscribe();

      });
  }
  reload(){
    window.location.reload();
  }
     ////////////************   Messages  ***************/
  mesgSave() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  mesgDelete() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUsers(),
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        )
      }
    })
  }

  public picked(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.sellersPermitFile = file;
      this.handleInputChange(file); //turn into base64

    }
    else {
      alert("No file selected");
    }
  }
  handleInputChange(files: any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.imageSrc = base64result;
    this.sellersPermitString = base64result;
    this.myimage1 =this.sellersPermitString;
    var kk = this.sellersPermitString;

    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.sellersPermitString);


  }
  retrivePicDefult(){
    this.imagesservice.getImage('john').subscribe(
      (data: ImagesModel) => {

        this.myimage1 = data.itpicture;
        this.sellersPermitString = data.itpicture;
        this.myimage1 = this.sellersPermitString;

        var kk = this.sellersPermitString;

      }
    );
}
  log() {
    // for debug

    this.myimage1 =this.sellersPermitString;
    //console.log('1', this.sellersPermitString);
  }

}
