import { Pipe } from '@angular/core';
import { ISubmission } from '../../../../../core/models';
import { Filter } from '../../../../../core/services/filter.service';

@Pipe({
	name: 'listFilter',
})
export class ListFilterPipe {
	transform(value: ISubmission[], q: Filter): ISubmission[] {
		if (!q) {
			return value;
		}
		return value.filter((item) => {
			return !(
				q.search &&
				item.taskName.toLowerCase().indexOf(q.search.toLowerCase()) === -1 &&
				item.status.toLowerCase().indexOf(q.search.toLowerCase()) === -1 &&
				item.emailFrom.toLowerCase().indexOf(q.search.toLowerCase()) === -1 &&
				item.emailTo.toLowerCase().indexOf(q.search.toLowerCase()) === -1 &&
				item.customerAddress.toLowerCase().indexOf(q.search.toLowerCase()) === -1
			);
		});
	}
}
