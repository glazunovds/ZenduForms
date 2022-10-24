import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
	selector: 'app-submissions-filter',
	templateUrl: './submissions-filter.component.html',
	styleUrls: ['./submissions-filter.component.scss'],
})
export class SubmissionsFilterComponent implements OnInit {
	filterForm: FormGroup;

	constructor() {
		this.filterForm = new FormGroup({
			formSearch: new FormControl(''),
			formType: new FormControl(''),
			formStatus: new FormControl(''),
			formDate: new FormControl(''),
			formMapOrList: new FormControl('map'),
		});
	}

	ngOnInit(): void {}

	onChangeSubmissionView(event: MatButtonToggleChange): void {
		console.log(event);
	}

	stop(event: Event) {
		event.stopPropagation();
	}

	exportSubmissions() {
		console.log('export submissions');
	}
}
