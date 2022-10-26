import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MockService } from '../../../../core/services/mock.service';
import { saveAs } from 'file-saver';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
	selector: 'app-submissions-filter',
	templateUrl: './submissions-filter.component.html',
	styleUrls: ['./submissions-filter.component.scss'],
})
export class SubmissionsFilterComponent implements OnInit, OnDestroy {
	filterForm: FormGroup;
	routerSub!: Subscription;

	constructor(private mockService: MockService, public router: Router) {
		this.filterForm = new FormGroup({
			formSearch: new FormControl(''),
			formType: new FormControl(''),
			formStatus: new FormControl(''),
			formDate: new FormControl(''),
			formMapOrList: new FormControl('list'),
		});
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

	ngOnDestroy(): void {
		this.routerSub.unsubscribe();
	}

	ngOnInit(): void {
		this.setMapOrList(this.router.url);
		this.routerSub = this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.pipe(map((event) => (event as CustomEvent).url))
			.subscribe((url) => {
				this.setMapOrList(url);
			});
	}

	setMapOrList(url: string) {
		this.filterForm.controls['formMapOrList'].patchValue(url.includes('map') ? 'map' : 'list');
	}
}

interface CustomEvent {
	url: string;
}
