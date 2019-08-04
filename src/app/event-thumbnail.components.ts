import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './events/shared/event.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    templateUrl: '/event-thumbnail.components.html'
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    @Output() eventClick = new EventEmitter();

    someProperty: any = 'some value';

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }

    logFool() {
        console.log('fooooo');
    }

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        }
    }

}
