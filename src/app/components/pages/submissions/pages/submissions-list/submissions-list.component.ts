import { Component, OnInit } from '@angular/core';
import { MockService } from '../../../../../core/services/mock.service';

@Component({
	selector: 'app-submissions-list',
	templateUrl: './submissions-list.component.html',
	styleUrls: ['./submissions-list.component.scss'],
})
export class SubmissionsListComponent implements OnInit {
	constructor(private mockService: MockService) {}

	ngOnInit(): void {
		this.mockService.getMockData(100).subscribe((data) => {
			console.log(data);
		});
	}
}
