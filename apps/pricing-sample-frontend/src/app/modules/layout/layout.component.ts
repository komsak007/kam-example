import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pricing-sample-nx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  layouts: { [key: number]: string } = {
    1: 'layout-1',
    2: 'layout-2',
    3: 'pricing',
    4: 'pricing-child',
    5: 'todo',
  };

  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log('LAYOUT INIT');
  }

  loadLayout(id?: number): void {
    if (!id) this.router.navigate(['']);
    else {
      const routeName = this.layouts[id];
      this.router.navigate([routeName]);
    }
  }
}
