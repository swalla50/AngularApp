import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service: SharedService) { }

  UserList: any=[];

  ngOnInit(): void {
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList=data;
    })
  }

}
