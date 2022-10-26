import { Pipe } from '@angular/core';
import { ISubmission } from '../../../../../core/models';
import { Filter } from '../../../../../core/services/filter.service';
import * as moment from 'moment';

@Pipe({
	name: 'listFilter',
})
export class ListFilterPipe {
	transform(value: ISubmission[], q: Filter): ISubmission[] {
		if (!q) {
			return value;
		}
		return value.filter((item) => {
			const search = q.search.toLowerCase();
			const sameTaskName = item.taskName.toLowerCase().includes(search);
			const sameEmailFrom = item.emailFrom.toLowerCase().includes(search);
			const sameEmailTo = item.emailTo.toLowerCase().includes(search);
			const sameCustomerAddress = item.customerAddress.toLowerCase().includes(search);
			const sameDate = q.date ? moment(item.dueDateRaw).isSame(q.date, 'day') : true;
			const sameStatus = q.status && q.status !== 'all' ? q.status === item.status : true;
			return (
				(sameTaskName || sameEmailFrom || sameEmailTo || sameCustomerAddress) &&
				sameDate &&
				sameStatus
			);
		});
	}
}
