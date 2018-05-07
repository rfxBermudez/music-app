import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
	selector: '[text-contains-validator]',
	providers: [
	{
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => TextContainsValidator ),
		multi: true
	}
	]
})
export class TextContainsValidator implements Validator {
	@Input('text-contains-validator') param:string; 
	validate(control: AbstractControl) {
		let regexp: RegExp
		let text = control.value;
		regexp = /^[^a-z]*$/ ;
		return !regexp.test(text) ? { 'textMayus': { regexp } } : null;
	}
}