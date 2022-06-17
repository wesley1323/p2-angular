import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WesleyHomeComponent } from './wesley-home/wesley-home.component';
import { WesleyTasksComponent } from './wesley-tasks/wesley-tasks.component';
import { WesleyTasksService } from './wesley-tasks.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WesleyHomeComponent },
      { path: 'tarefas', component: WesleyTasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WesleyHomeComponent,
    WesleyTasksComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent],
  providers: [WesleyTasksService],
})
export class AppModule {}
