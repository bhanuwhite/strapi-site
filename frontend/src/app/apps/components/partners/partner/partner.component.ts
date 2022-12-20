import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/apps/services/Api.service';
// import { ApiService } from './Api.service';
import { Model } from './partner.model';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  formValue!: UntypedFormGroup;
  EModelObj: Model = new Model();
  Data!: any;

  constructor(private formbuilder: UntypedFormBuilder, private Api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      companyName: ["", [Validators.required, Validators.pattern ('?=[A-Z a-z]+$)^(?=.{8,}).*')]],
      domain: ["", [Validators.required, Validators.pattern ('?=[A-Z a-z]+$)^(?=.{8,}).*')]],
      owendBy: ["", [Validators.required, Validators.pattern ('?=[A-Z a-z]+$)^(?=.{8,}).*')]],
      mobile: ["", [Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/)]],
      addOn: [''],
    })
    this.getAll();
  }
  postDetails() {
    // this.EModelObj.companyName = this.formValue.value.companyName;
    // this.EModelObj.domain = this.formValue.value.domain;
    // this.EModelObj.ownedBy = this.formValue.value.ownedBy;
    // this.EModelObj.mobile = this.formValue.value.mobile;
    // this.EModelObj.addOn = this.formValue.value.addOn;
    this.Api.post(this.formValue.value)
      .subscribe((res: any) => {
        console.log(res);
        
        alert(' successfully')
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAll();
      },
        (_err: any) => {
          alert('something went wrong');
        }
      )
  }
 

  getAll() {
    this.Api.get()
      .subscribe((res: any) => {
        this.Data = res;
      })
  }

  delete(row: any) {
    this.Api.delete(row.id)
      .subscribe((res: any) => {
        alert("details deleted")
        this.getAll()
      })
  }

onEdit(row:any){
  this.EModelObj.id=row.id;
  this.formValue.controls['companyName'].setValue(row.companyName);
  this.formValue.controls['domain'].setValue(row.domain);
  this.formValue.controls['ownedBy'].setValue(row.ownedBy);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['addOn'].setValue(row.addOn);
}

updateDetails(){
  // this.EModelObj.companyName = this.formValue.value.companyName;
  // this.EModelObj.domain = this.formValue.value.domain;
  // this.EModelObj.ownedBy = this.formValue.value.ownedBy;
  // this.EModelObj.mobile = this.formValue.value.mobile;
  // this.EModelObj.addOn = this.formValue.value.addOn;
 let formData = {...this.formValue.value,id:this.EModelObj}
  .subscribe((res: any)=>{
    alert('updated successfully')
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAll();
  })
}
}
