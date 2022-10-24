import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsListComponent } from './submissions-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: SubmissionsListComponent,
	},
];

@NgModule({
	declarations: [SubmissionsListComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubmissionsListModule {}
