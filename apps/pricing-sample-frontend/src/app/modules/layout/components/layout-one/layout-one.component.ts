import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pricing-sample-nx-layout-one',
  templateUrl: './layout-one.component.html',
  styleUrls: ['./layout-one.component.scss'],
})
export class LayoutOneComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log('LAYOUT INIT');
  }

  backToPreviousRoute() {
    this.router.navigate(['']);
  }
}
