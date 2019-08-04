import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared/event.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSession: ISession[] = [];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSession(this.filterBy);
      this.sortBy === 'name' ? this.visibleSession.sort(sortByNameAsc) : this.visibleSession.sort(sortByNameDesc);
    }
  }

  filterSession(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSession = this.sessions.slice(0);
    } else {
      this.visibleSession = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filterBy;
      });
    }
  }

}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 0; } else { return -1; }
}

function sortByNameDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
