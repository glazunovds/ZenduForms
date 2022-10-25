import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsListComponent } from './submissions-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
	{
		path: '',
		component: SubmissionsListComponent,
	},
];

@NgModule({
	declarations: [SubmissionsListComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
	],
})
export class SubmissionsListModule {}
