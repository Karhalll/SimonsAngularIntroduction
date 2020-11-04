import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
	@Input() taskToDo: string;
	@Output() taskThatWasCarried: EventEmitter<string> = new EventEmitter<string>(null);

  constructor(private _stateService: StateService) { 
		console.log("I was created");
	}

  ngOnInit() {
  }

	emitEvent() {
		this.taskThatWasCarried.next(this.taskToDo);
	}
}
