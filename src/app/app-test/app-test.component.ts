import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-test',
  templateUrl: './app-test.component.html',
  styleUrls: ['./app-test.component.css']
})
export class AppTestComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'price': ['', [Validators.required, Validators.min(5000)]],
      'shipping': ['', [Validators.required, Validators.max(500)]],
    });
  }

  ngOnInit() {
  }

}
