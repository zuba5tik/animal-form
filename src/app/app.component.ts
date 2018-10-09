import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

// export interface FormField {
//   label: string;
//   type: string;
// }
// export interface InputType {
//   type: string;
// }
// export const inputTypes: InputType[] = [
//   {type: 'text'}, {type: 'select'}
// ];
// export function getFormField(formField: FormField = null): FormGroup {
//   return new FormGroup({
//     label: new FormControl(formField ? formField.label : 'Label'),
//     type: new FormControl(formField ? formField.type : inputTypes[0].type),
//   });
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animal-app';
  animalForm: FormGroup;
  animalType = new FormGroup({
    typeLabel: new FormControl(),
    typeKey: new FormControl(),
  });
  constructor(private fb: FormBuilder) {
    this.animalForm = this.fb.group({
      animalName: [],
      animalType: [],
      // animalType: this.animalType = this.fb.group({
      //   typeLabel: [],
      //   typeKey: [],
      // })
    });
  }

  inputDropDown() {
    // this.animalType.addControl('typeKey', new FormControl());
    this.animalForm.reset();
    this.animalForm.removeControl('animalType');
    this.animalForm.registerControl('animalType', new FormGroup({typeLabel: new FormControl(), typeKey: new FormControl()}));
    // this.animalType.addControl('typeLabel', new FormControl());
    // this.animalType.addControl('typeKey', new FormControl());
    this.inputType = 'select';
  }

  inputText() {
    this.animalForm.reset();
    this.animalForm.removeControl('animalType');
    this.animalForm.addControl('animalType', new FormControl());
    this.inputType = 'text';
  }

  // getField() {
  //   this.types = [
  //     {
  //       'key': this.animalType.typeKey,
  //       'label': this.animalType.typeLabel,
  //     },
  //     ...this.types,
  //   ];
  // }

  // tslint:disable-next-line:member-ordering
  inputType = 'text';

  // tslint:disable-next-line:member-ordering
  types = [
    {'key': 'dog-0', 'label': 'Dog'},
    {'key': 'cat-1', 'label': 'Cat'}
  ];

  // GetControl(form: FormGroup, field: string) {
  //   // tslint:disable-next-line:whitespace
  //   const fieldType = document.querySelector('input[name="'+field+'"]');
  //   if (fieldType.getAttribute('type') === 'text') {
  //     console.log('nice');
  //   }
  //   return form.get(field);
  // }

  // fieldType = [
  //   {type: 'text', placeholder: 'Animal Type text'},
  //   {type: 'select', placeholder: 'Animal Type select'}
  // ];
}
