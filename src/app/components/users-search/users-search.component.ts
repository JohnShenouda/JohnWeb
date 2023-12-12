import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';  ///----------- for searching pop up -----------
import { UsersService } from 'src/app/services/UsersService';
import { UsersModel } from 'src/app/models/UsersModel';
import { LocalStorageService } from 'ngx-webstorage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';         ///----------- for searching pop up -----------


@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {
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


  usersList: UsersModel[] = [];

  @Output() submitClicked = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<UsersSearchComponent>,     ///----------- for searching pop up -----------
              public usersService: UsersService,
              public users: UsersModel,
              public storage: LocalStorageService,                     /// ----------- Storage
              @Inject(MAT_DIALOG_DATA)                                 ///-----------  For searching pop up -----------
              public usersSelectedData: UsersModel) { }                ///------------ For selection


  ngOnInit(): void {
    this.  retriveUsersLookupTop() ;
  }
 
  retriveUsersLookupTop() {
    this.usersList = [];
    this.usersService.getUsersLookupTop().subscribe((data: UsersModel[]) => {
      for (let i = 0; i < data.length; i++) {
        this.usersList[i] = data[i];
      }
      console.log(data);
    })
  }

  SelectUsers(user: UsersModel){                              ///----------- for searching pop up send variables from table-----------

  
    this.usersSelectedData.recid=user.recid
    this.usersSelectedData.fullname=user.fullname
    this.usersSelectedData.area=user.area
    this.usersSelectedData.sub_area=user.sub_area
    this.usersSelectedData.relation=user.relation
    this.usersSelectedData.gender=user.gender
    this.usersSelectedData.service=user.service
    this.usersSelectedData.floor=user.floor
    this.usersSelectedData.notes=user.notes
    this.usersSelectedData.ser=user.ser
    this.usersSelectedData.married=user.married
    this.usersSelectedData.tripsattend=user.tripsattend
    this.usersSelectedData.usechair=user.usechair
    this.usersSelectedData.needhelp=user.needhelp
    this.usersSelectedData.sleepwith=user.sleepwith
    this.usersSelectedData.phone=user.phone
    this.usersSelectedData.address=user.address
    this.usersSelectedData.retardation=user.retardation
    this.usersSelectedData.dob=user.dob
    this.usersSelectedData.listening=user.listening
    this.usersSelectedData.seeing=user.seeing
    this.usersSelectedData.speaking=user.speaking
    this.usersSelectedData.eating=user.eating
    this.usersSelectedData.medicine=user.medicine
    this.usersSelectedData.crisis=user.crisis
    this.usersSelectedData.healthy=user.healthy
    this.usersSelectedData.listen=user.listen
    this.usersSelectedData.speak=user.speak
    this.usersSelectedData.eat=user.eat
    this.usersSelectedData.see=user.see
    this.usersSelectedData.health=user.health
    this.usersSelectedData.medicaments=user.medicaments
    this.usersSelectedData.panic=user.panic
    this.usersSelectedData.age=user.age
    this.usersSelectedData.retardationreason=user.retardationreason
    this.usersSelectedData.study=user.study
    this.usersSelectedData.job=user.job
    this.usersSelectedData.parents=user.parents
    this.usersSelectedData.marital=user.marital
    this.usersSelectedData.confession=user.confession
    this.usersSelectedData.ziina=user.ziina
    this.usersSelectedData.entrydate=user.entrydate
    this.usersSelectedData.hellp=user.hellp
    this.usersSelectedData.number_of_hellpers=user.number_of_hellpers
    this.usersSelectedData.groups=user.groups
    this.usersSelectedData.needcar=user.needcar
    this.usersSelectedData.userid=user.userid
    this.usersSelectedData.username=user.username
    this.usersSelectedData.password=user.password
    this.usersSelectedData.itpicture=user.itpicture
    
    this.submitClicked.emit(this.usersSelectedData);
    this.dialogRef.close();
  }
}
