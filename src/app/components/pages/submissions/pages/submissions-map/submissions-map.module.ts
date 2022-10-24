import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsMapComponent } from './submissions-map.component';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionItemComponent } from './submission-item/submission-item.component';

const routes: Routes = [
	{
		path: '',
		component: SubmissionsMapComponent,
	},
];

@NgModule({
	declarations: [SubmissionsMapComponent, SubmissionItemComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubmissionsMapModule {}
