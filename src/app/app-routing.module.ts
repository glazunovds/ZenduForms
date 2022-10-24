import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'submissions',
		title: 'Submissions',
		loadChildren: () =>
			import('./components/pages/submissions/submissions.module').then(
				(m) => m.SubmissionsModule,
			),
	},
	{
		path: 'forms',
		title: 'Forms',
		loadChildren: () =>
			import('./components/pages/forms/forms.module').then((m) => m.FormsModule),
	},
	{
		path: 'customers',
		title: 'Customers',
		loadChildren: () =>
			import('./components/pages/customers/customers.module').then((m) => m.CustomersModule),
	},
	{
		path: 'history',
		title: 'History',
		loadChildren: () =>
			import('./components/pages/history/history.module').then((m) => m.HistoryModule),
	},
	{
		path: 'reports',
		title: 'Reports',
		loadChildren: () =>
			import('./components/pages/reports/reports.module').then((m) => m.ReportsModule),
	},
	{
		path: 'workflow',
		title: 'Workflow',
		loadChildren: () =>
			import('./components/pages/workflow/workflow.module').then((m) => m.WorkflowModule),
	},
	{
		path: '**',
		title: 'Page not found',
		loadChildren: () =>
			import('./components/pages/page-not-found/page-not-found.module').then(
				(m) => m.PageNotFoundModule,
			),
	},
	{ path: '', redirectTo: '/submissions', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
