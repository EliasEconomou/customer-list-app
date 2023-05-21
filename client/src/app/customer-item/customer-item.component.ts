import { Component, Input } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-item',
  standalone: true,
  imports: [NgbTypeaheadModule],
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent {
  @Input()
  customer: any;


}
