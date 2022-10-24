import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from '../history/history.component';

const routes: Routes = [
	{
		path: '',
		component: HistoryComponent,
	},
];

@NgModule({
	declarations: [PageNotFoundComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PageNotFoundModule {}
