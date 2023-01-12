import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/Api.service';
import { APIResponse, Partner, PartnerAttributes } from './partner.model';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  formValue!: FormGroup;
  allPrtners:Partner[] = [];
  isformvalid=false;
  selectedRowId: any;
  isUpadte: boolean = false;

  constructor(private formbuilder: FormBuilder, private Api:ApiService) {
   }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Company_Name: ["",Validators.required],
      Domain: ["",Validators.required],
      Owned_By: ["",Validators.required],
      Mobile: ["",[Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/)]],
      Added_On: ['',Validators.required],
      Description: ['',Validators.required],
    })
    this.getAll();
  }
  postDetails() {
    this.Api.post({data: this.formValue.value})
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
      .subscribe((res: APIResponse) => {
        this.allPrtners = res.data;
      })
  }

  delete(id: number) {
    this.Api.delete(id)
      .subscribe((res: APIResponse) => {
        alert("deleted sucessfull")
        this.getAll()
      })
  }

onEdit(row:Partner){
  this.isUpadte = true;
  this.selectedRowId = row.id;
  this.formValue.patchValue(row.attributes);
}

updateDetails(){
 let formData = {data: {...this.formValue.value,id:this.selectedRowId}}
 this.Api.update(formData, this.selectedRowId)
  .subscribe((res: APIResponse)=>{
    console.log(res)
    alert('updated successfully')
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAll();
  })
}
}
