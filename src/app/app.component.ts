import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'angular-intro';
	price = '1000';


	taskArray = [
		{
			todo: "clean room",
		},
		{
			todo: "walk a dog",
		},
		{
			todo: "call mum",
		}
	];

	catchEventEmitted(emittedValue: string) {
		console.log(emittedValue);
	}

	logTitle() {
		console.log(this.title);
	}
}
