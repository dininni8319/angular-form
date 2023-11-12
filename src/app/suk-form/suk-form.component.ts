import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl,
  Validators
} from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } | null {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true}; 
  }
  return null
}

@Component({
  selector: 'app-suk-form',
  templateUrl: './suk-form.component.html',
  styleUrls: ['./suk-form.component.css']
})

export class SukFormComponent {
  myForm: FormGroup
  sku: AbstractControl

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sukInput': ['ABC123', 
        Validators.compose(
          [Validators.required, skuValidator]
        ), 
      ]
    })

    this.sku = this.myForm.controls['sukInput']
  }
  onSubmit(sku: string){
    console.log('you submitted value:', sku);
  }
}
