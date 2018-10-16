import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'animal-app';
  inputType = 'select';
  animalForm: FormGroup;
  animalType = this.inputType === 'select' ? new FormGroup({
    typeLabel: new FormControl(),
    typeKey: new FormControl(),
  }) : new FormControl();

  constructor(private fb: FormBuilder) {
    this.animalForm = this.fb.group({
      'animalName': ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      'animalType': this.inputType === 'select' ? new FormGroup({
        'typeLabel': new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
        'typeKey': new FormControl()}) : [],
    });
  }

  ngOnInit() {

  }

  inputDropDown() {
    if (this.inputType === 'select') {
        this.animalForm.reset();
        this.animalForm.removeControl('animalType');
        this.animalForm.addControl('animalType', new FormControl());
        this.inputType = 'text';
    } else if (this.inputType === 'text') {
        this.animalForm.reset();
        this.animalForm.removeControl('animalType');
        this.animalForm.registerControl('animalType', new FormGroup({typeLabel: new FormControl(), typeKey: new FormControl()}));
        this.inputType = 'select';
    }
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
  // inputType = 'select';

  // tslint:disable-next-line:member-ordering
  types = [
    {'key': 'dog-0', 'label': 'Dog'},
    {'key': 'cat-1', 'label': 'Cat'}
  ];
}
