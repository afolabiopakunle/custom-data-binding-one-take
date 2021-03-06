import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IComputer } from '../computer.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createDesktop = new EventEmitter<IComputer>();
  @Output() createLaptop = new EventEmitter<IComputer>();

  department;
  description;
  constructor() {}

  ngOnInit() {}

  addDesktop() {
    this.createDesktop.emit({
      department: this.department,
      description: this.description
    });

    this.department = '';
    this.description = '';
  }

  addLaptop() {
    this.createLaptop.emit({
      department: this.department,
      description: this.description
    });

    this.department = '';
    this.description = '';
  }
}
