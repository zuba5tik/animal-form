import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

// export interface Type {
//   key: string;
//   label: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animal-app';
  animalForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.animalForm = this.fb.group({
      name: [''],
      type: [''],
    });
  }

  types = [
    {'key': 'dog-0', 'label': 'Dog'},
    {'key': 'cat-1', 'label': 'Cat'}
  ];
}
