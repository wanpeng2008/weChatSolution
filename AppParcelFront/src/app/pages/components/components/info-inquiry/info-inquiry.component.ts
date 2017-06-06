import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-inquiry',
  templateUrl: './info-inquiry.component.html',
  styleUrls: ['./info-inquiry.component.css']
})
export class InfoInquiryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  res: any = {
    agree: true
  };
}
