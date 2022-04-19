import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { TextBoxComponent } from './textbox/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TabsComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
