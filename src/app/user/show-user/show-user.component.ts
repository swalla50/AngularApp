import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  UserList: any=[];

  ngOnInit(): void {
    this.refreshUserList();
  }

  
  deleteClick(item:any){
    if(confirm("Are you sure that you want to delete this item?")){
      this.service.deleteUser(item.UserId).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      });
    }
  }
  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList=data;
    });
  }

}
