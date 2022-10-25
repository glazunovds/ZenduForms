import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MockService } from '../../../../../core/services/mock.service';
import { ISubmission } from '../../../../../core/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
	selector: 'app-submissions-list',
	templateUrl: './submissions-list.component.html',
	styleUrls: ['./submissions-list.component.scss'],
})
export class SubmissionsListComponent implements AfterViewInit {
	public dataSource = new MatTableDataSource<ISubmission[]>([]);
	public isLoading = true;
	public selection = new SelectionModel<ISubmission[]>(true, []);
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
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(private mockService: MockService) {}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.mockService.getMockData(100).subscribe((data) => {
			this.dataSource.data = data as unknown as ISubmission[][];
			this.dataSource.sort = this.sort;
			this.isLoading = false;
		});
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	masterToggle() {
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.data.forEach((row) => this.selection.select(row));
	}
}
