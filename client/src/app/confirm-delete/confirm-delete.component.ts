import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-confirm-delete',
	standalone: true,
	imports: [NgbDatepickerModule, FontAwesomeModule],
	templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {
	closeResult = '';
  deleteIcon = faRemove;
  @Output()
  okEvent: EventEmitter<any> = new EventEmitter();
  @Input()
  customerFullname = '';

	constructor(private modalService: NgbModal) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  onClickingOk() {
    console.log("ok")
    this.okEvent.emit();
  }
}