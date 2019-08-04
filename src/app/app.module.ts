import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './event-thumbnail.components';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { CreateEventComponent } from './events/shared/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivateGuard } from './errors/event-route-activate.guard';
import { EventsListResolverService } from './events/shared/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/event-session/create-session.component';
import { CollapsibleWellComponent } from './common/collapsible-well.componnents';
import { DurationPipe } from './events/shared/duration.pipe';
import { SessionListComponent } from './events/event-details/sessionList/session-list.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    // ToastrModule added
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    EventListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    Error404Component,
    DurationPipe
  ],
  providers: [EventService, ToastrService,
    EventRouteActivateGuard,
    EventsListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you have not saved this event ,do yoy really want to cancel ?');

  }
  //  return false;
}
