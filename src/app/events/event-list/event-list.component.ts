import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../common/toastr.service';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: IEvent[];
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
