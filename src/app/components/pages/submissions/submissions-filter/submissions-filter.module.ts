import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsFilterComponent } from './submissions-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [SubmissionsFilterComponent],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatSelectModule,
		MatDatepickerModule,
		MatMomentDateModule,
		FormsModule,
		MatButtonToggleModule,
		ReactiveFormsModule,
		RouterModule,
		MatButtonModule,
	],
	exports: [SubmissionsFilterComponent],
	providers: [MatMomentDateModule],
})
export class SubmissionsFilterModule {}
