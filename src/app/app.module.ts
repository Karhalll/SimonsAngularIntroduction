import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateDirective } from './directives/translate.directive';
import { TaskComponent } from './components/task/task.component';
import { FormatMoneyPipe } from './pipes/format-money.pipe';
import { ContantsComponent } from './components/contants/contants.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RoutingWrapperComponent } from './routing-wrapper/routing-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslateDirective,
    TaskComponent,
    FormatMoneyPipe,
    ContantsComponent,
    TaskListComponent,
    RoutingWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
