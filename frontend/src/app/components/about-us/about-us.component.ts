import { Component } from '@angular/core';

interface EmployeesInterface{
  id:number;
  name:string;
  imgSrc:string;
  content:string;
  ids:number;
}


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})


export class AboutUsComponent {
  employeearray:EmployeesInterface[]=[
    {
      id:1,
      name:'Alex',
      imgSrc:'../../../assets/images/about-us-images/face1.jpg',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque quia deleniti a dolores numquam eligendi quidem accusamus! Esse necessitatibus error suscipit, nostrum expedita cupiditate quibusdam unde aliquam ducimus nesciunt amet!expedita cupiditate quibusdam unde aliquam expedita cupiditate quibusdam unde aliquam',
      ids:1,
    },
    {
      id:2,
      name:'John',
      imgSrc:'../../../assets/images/about-us-images/face3.jpg',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque quia deleniti a dolores numquam eligendi quidem accusamus! Esse necessitatibus error suscipit, nostrum expedita cupiditate quibusdam unde aliquam ducimus nesciunt amet!expedita cupiditate quibusdam unde aliquam expedita cupiditate quibusdam unde aliquam',
      ids:2,
    },
    {
      id:3,
      name:'Jane',
      imgSrc:'../../../assets/images/about-us-images/face2.jpg',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque quia deleniti a dolores numquam eligendi quidem accusamus! Esse necessitatibus error suscipit, nostrum expedita cupiditate quibusdam unde aliquam ducimus nesciunt amet!expedita cupiditate quibusdam unde aliquam expedita cupiditate quibusdam unde aliquam',
      ids:3,
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
  srcvar:string='../../../assets/images/about-us-images/10.webp';
  altvar:string='img';
  namevar:string='Employee Details';
  userDescription = "Hey content";
  changecode(user:any){
    this.selectedUser = user
    // this.srcvar=user.src;
    // this.altvar=user.alt;
    // this.namevar=user.name;
    this.contentdropdown=false;
  }  
}
