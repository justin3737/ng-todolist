import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { TextBoxComponent } from './textbox/textbox.component';
import { taskReducer } from './store/reducers/task.reducer';
import { tabReducer } from './store/reducers/tab.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TabsComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      tasks: taskReducer,
      tabs: tabReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
