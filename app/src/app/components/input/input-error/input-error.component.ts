import { Component, Input} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
	selector: 'inga-input-error',
	templateUrl: './input-error.component.html',
	styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent
{
	@Input() control: AbstractControl | null = null;
	@Input() alt = '';
	@Input() msgPattern = '';
}
