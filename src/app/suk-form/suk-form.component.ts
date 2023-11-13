import { Component } from '@angular/core'

import {
  FormGroup,
  FormControl,
} from '@angular/forms'

// function skuValidator(control: FormControl): { [s: string]: boolean } | null {
//   if (!control.value.match(/^123/)) {
//     return {invalidSku: true}
//   }
//   return null
// }

@Component({
  selector: 'app-suk-form',
  templateUrl: './suk-form.component.html',
  styleUrls: ['./suk-form.component.css']
})

export class SukFormComponent {
  myForm = new FormGroup({
    sku: new FormControl(''),
    productName: new FormControl('')
  })

  constructor() {}
  onSubmit(){
    console.log('you submitted value:', this.myForm.value)
  }
}
