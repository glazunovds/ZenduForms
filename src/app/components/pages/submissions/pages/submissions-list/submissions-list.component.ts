import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MockService } from '../../../../../core/services/mock.service';
import { ISubmission } from '../../../../../core/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
	selector: 'app-submissions-list',
	templateUrl: './submissions-list.component.html',
	styleUrls: ['./submissions-list.component.scss'],
})
export class SubmissionsListComponent implements AfterViewInit {
	public dataSource: ISubmission[] = [];
	public isLoading = true;
	public selection = new SelectionModel<ISubmission>(true, []);
	public page = 1;
	public Math = Math;
	public displayedColumns: string[] = [
		'select',
		'taskName',
		'status',
		'emailFrom',
		'emailTo',
		'customerAddress',
		'dueDate',
	];
	public today = new Date();
	public PAGE_SIZE = 10;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild('p') p: unknown;

	constructor(private mockService: MockService) {}

	ngAfterViewInit() {
		// free api cant handle too many requests, sometimes it will fail
		this.mockService.getMockData(77).subscribe((data) => {
			this.dataSource = data;
			this.isLoading = false;
		});
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.length;
		return numSelected === numRows;
	}

	masterToggle() {
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.forEach((row) => this.selection.select(row));
	}
}
