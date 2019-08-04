import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { CreateEventComponent } from './events/shared/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivateGuard } from './errors/event-route-activate.guard';
import { EventsListResolverService } from './events/shared/events-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/event-session/create-session.component';

const routes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events', component: EventListComponent,
    resolve: { events: EventsListResolverService }
  },
  {
    path: 'events/:id', component: EventDetailsComponent
    , canActivate: [EventRouteActivateGuard]
  },

  {
    path: 'events/session/new', component: CreateSessionComponent
  },
  { path: '404', component: Error404Component },

  { path: '', redirectTo: '/events', pathMatch: 'full' },

  { path: 'user', loadChildren: './user/user.module#UserModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
