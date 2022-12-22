import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/Api.service';
import { Partner } from './partner.model';
// import { ApiService } from './Api.service';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  formValue!: UntypedFormGroup;
  allPrtners:Partner[] = [];
  isformvalid=false;
  selectedRowId: any;

  constructor(private formbuilder: FormBuilder, private Api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Company_Name: ["",[Validators.required]],
      Domain: ["",[Validators.required]],
      Owned_By: ["",[Validators.required]],
      Mobile: ["",[Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/)],Validators.maxLength(10)],
      Added_On: ['',[Validators.required]],
      Description: ['',[Validators.required]],
    })
    this.getAll();
  }
  postDetails() {
    this.Api.post(this.formValue.value)
      .subscribe((res: any) => {
        console.log(res);
        
        alert(' successfully')
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAll();
      },
        
      )
      if(this.formValue.valid){
        console.log(this.formValue);
        
        this.isformvalid=false;
      }else{
        this.isformvalid=true;
      }
      (_err: any) => {
        alert('something went wrong');
      }
  }
 

  getAll() {
    this.Api.get()
      .subscribe((res: Partner[]) => {
        this.allPrtners = res;
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
  this.selectedRowId = row.id
  this.formValue.controls['companyName'].setValue(row.companyName);
  this.formValue.controls['domain'].setValue(row.domain);
  this.formValue.controls['ownedBy'].setValue(row.ownedBy);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['addOn'].setValue(row.addOn);
}

updateDetails(){
 let formData = {...this.formValue.value,id:this.selectedRowId}
 this.Api.update(formData, this.selectedRowId)
  .subscribe((res: any)=>{
    alert('updated successfully')
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAll();
  })
}
}
