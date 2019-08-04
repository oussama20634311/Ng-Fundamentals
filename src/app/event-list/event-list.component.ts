import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventService } from '../events/shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: any;
  constructor(private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
   // this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data) {
    this.toastrService.Success(data, 'info');
    console.log('receive', data);
  }
}
