import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import {Routes,RouterModule} from '@angular/router';
import { WhenComponent } from './when/when.component';
import { ReviseComponent } from './revise/revise.component';
import { SessionListComponent } from './revise/session-list/session-list.component';
import { DetailsComponent } from './revise/details/details.component';
import { NextComponent } from './next/next.component';
import { ShareComponent } from './next/share/share.component';
const appRoutes: Routes = [
   {path: '', component: MainComponent},
   {path: 'when', component: WhenComponent},
   {path: 'revise', component: ReviseComponent},
   {path: 'next', component: NextComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MainComponent,
    WhenComponent,
    ReviseComponent,
    SessionListComponent,
    DetailsComponent,
    NextComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    //forRoot is used to register Routes in application.
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
