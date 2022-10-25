import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MockService } from '../../../../core/services/mock.service';
import { saveAs } from 'file-saver';

@Component({
	selector: 'app-submissions-filter',
	templateUrl: './submissions-filter.component.html',
	styleUrls: ['./submissions-filter.component.scss'],
})
export class SubmissionsFilterComponent {
	filterForm: FormGroup;

	constructor(private mockService: MockService) {
		this.filterForm = new FormGroup({
			formSearch: new FormControl(''),
			formType: new FormControl(''),
			formStatus: new FormControl(''),
			formDate: new FormControl(''),
			formMapOrList: new FormControl('map'),
		});
	}

	onChangeSubmissionView(event: MatButtonToggleChange): void {
		console.log(event);
	}

	stop(event: Event) {
		event.stopPropagation();
	}

	exportSubmissions() {
		const result = this.mockService.getSavedMockData();
		const blob = new Blob([JSON.stringify(result) as unknown as BlobPart], {
			type: 'text/plain;charset=utf-8',
		});
		saveAs(blob, 'submissions.json');
	}
}
