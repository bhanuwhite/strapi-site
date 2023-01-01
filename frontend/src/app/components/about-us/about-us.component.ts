import { Component } from '@angular/core';

interface EmployeesInterface{
  id:number;
  name:string;
  imgSrc:string;
  content:string;
}


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})


export class AboutUsComponent {
  employeearray:EmployeesInterface[]=[
    {
      id:0,
      name:'Employee Details',
      imgSrc:'../../../assets/images/about-us-images/1011.jpg',
      content:'Here You can find the Employee Details.....................Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque quia deleniti a dolores numquam eligendi quidem accusamus! Esse necessitatibus error suscipit, nostrum expedita deleniti a dolores numquam eligendi quidem accusamus! Esse necessitatibus .',
    },
    {
      id:1,
      name:'Alex',
      imgSrc:'../../../assets/images/about-us-images/face1.jpg',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque quia deleniti a dolores numquam eligendi quidem accusamus! Esse necessitatibus error suscipit, nostrum expedita cupiditate quibusdam unde aliquam ducimus nesciunt amet!expedita cupiditate quibusdam unde aliquam expedita cupiditate quibusdam unde aliquam',
    },
    {
      id:2,
      name:'John',
      imgSrc:'../../../assets/images/about-us-images/face3.jpg',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque quia deleniti a dolores numquam eligendi quidem accusamus! Esse necessitatibus error suscipit, nostrum expedita cupiditate quibusdam unde aliquam ducimus nesciunt amet!expedita cupiditate quibusdam unde aliquam expedita cupiditate quibusdam unde aliquam',
    },
    {
      id:3,
      name:'Jane',
      imgSrc:'../../../assets/images/about-us-images/face2.jpg',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque quia deleniti a dolores numquam eligendi quidem accusamus! Esse necessitatibus error suscipit, nostrum expedita cupiditate quibusdam unde aliquam ducimus nesciunt amet!expedita cupiditate quibusdam unde aliquam expedita cupiditate quibusdam unde aliquam',
    },
  ];
  selectedUser = this.employeearray[0];
  
  constructor() {}

  ngOnInit(): void{  
  }
  
  contentdropdown:boolean = false;
  dropdownopen(){
   this.contentdropdown = !this.contentdropdown;
  }
  srcvar:string='';
  altvar:string='';
  namevar:string='';
  userDescription = "";
  changecode(user:any){
    this.selectedUser = user;
    this.contentdropdown=false;
  }  
}
