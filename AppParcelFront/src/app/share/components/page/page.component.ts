import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'Page',
  templateUrl: './page.component.html',
  host: {
    'class': 'page'
  },
  styleUrls: [ './page.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class PageComponent {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() spacing: boolean = true;
  @Input() ftBottom: boolean = false;
  @Input() noBottom: boolean = false;
}
