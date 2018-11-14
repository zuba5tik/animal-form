import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.css']
})
export class TimeControlComponent implements OnInit {

  @Input() showCurrentTime = false;
  @Input() label: string;

  time: FormControl;
  constructor() {
    this.time = new FormControl('');
  }

  ngOnInit() {
  }

  setCurrentTime() {
    const current = moment().format('HH:mm');
    this.time.setValue(current);
  }

}
