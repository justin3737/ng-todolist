import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextBoxComponent } from './components/textbox/textbox.component';
import { taskReducer } from './state/task.reducer';
import { tabsfilterReducer } from './state/tabsfilter.reducer';

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
      tabsfilter: tabsfilterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
