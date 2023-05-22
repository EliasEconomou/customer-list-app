import { Component, Input } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-phones',
  standalone: true,
  imports: [NgbPopoverModule, FontAwesomeModule],
  templateUrl: './contact-phones.component.html',
  styleUrls: ['./contact-phones.component.css']
})
export class ContactPhonesComponent {
  contactIcon = faPhone;
  @Input()
  homeNumber: string = '';
  @Input()
  workNumber: string = '';
  @Input()
  cellphoneNumber: string = '';

}