import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsComponent } from './submissions.component';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionsFilterModule } from './submissions-filter/submissions-filter.module';
import { MockService } from '../../../core/services/mock.service';

const routes: Routes = [
	{
		path: '',
		component: SubmissionsComponent,
		children: [
			{
				path: 'map',
				loadChildren: () =>
					import('./pages/submissions-map/submissions-map.module').then(
						(m) => m.SubmissionsMapModule,
					),
			},
			{
				path: 'list',
				loadChildren: () =>
					import('./pages/submissions-list/submissions-list.module').then(
						(m) => m.SubmissionsListModule,
					),
			},
		],
	},
];

@NgModule({
	declarations: [SubmissionsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SubmissionsFilterModule],
	providers: [MockService],
})
export class SubmissionsModule {}
