import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
