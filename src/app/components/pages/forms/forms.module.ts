import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: FormsComponent,
	},
];

@NgModule({
	declarations: [FormsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FormsModule {}
