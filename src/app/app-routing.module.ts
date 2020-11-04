import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContantsComponent } from './components/contants/contants.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RoutingWrapperComponent } from './routing-wrapper/routing-wrapper.component';

const routes: Routes = [
	{ path: "", component: RoutingWrapperComponent, children: [
		{ path: "contact", component: ContantsComponent },
		{ path: "taskList", component: TaskListComponent }
	]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
