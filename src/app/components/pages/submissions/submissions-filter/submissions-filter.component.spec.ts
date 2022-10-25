import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsFilterComponent } from './submissions-filter.component';

describe('SubmissionsFilterComponent', () => {
	let component: SubmissionsFilterComponent;
	let fixture: ComponentFixture<SubmissionsFilterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SubmissionsFilterComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SubmissionsFilterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
