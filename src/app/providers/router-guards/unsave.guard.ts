import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
	isFormDirty: () => boolean;
}

@Injectable()
export class UnsaveGuard {
	constructor() {}

	canDeactivate(
		component: CanComponentDeactivate,
	): Observable<boolean> | boolean {
		if (component.isFormDirty()) {
			return false
		} else {
			return true;
		}
	}
}
