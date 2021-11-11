import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
  export class ModalComponent implements OnInit {
    closeResult = '';
  
    constructor(private modalService: NgbModal, private service: SharedService) { }
    

    @Input() 
    dep:any;
    Email: string | undefined;
    firstName:string | undefined;
    lastName: string | undefined;

    UserList: any=[];

    faUserPlus =faUserPlus;
  
    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    ngOnInit(): void {
      this.Email=this.dep.Email;
      this.firstName=this.dep.firstName;
      this.lastName=this.dep.lastName;
    }

    addUser(){
      var val = {
        Email:this.Email,
        firstName:this.firstName,
        lastName:this.lastName
      }
      this.service.addUser(val).subscribe(res=>{
        alert(res.toString());
        this.refreshUserList();
      });
    }

    refreshUserList(){
      this.service.getUserList().subscribe(data=>{
        this.UserList=data;
      });
    }


    
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  }