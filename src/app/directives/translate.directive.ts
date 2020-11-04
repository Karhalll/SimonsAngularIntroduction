import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTranslate]'
})
export class TranslateDirective {
  constructor(el: ElementRef) {
		setTimeout (() => el.nativeElement.innerHTML = 'Translate', 1000);
	}
}
