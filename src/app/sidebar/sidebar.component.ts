import { ChangeDetectorRef, Component, OnInit, OnDestroy, Input, ViewChild, AfterContentInit, ViewEncapsulation } from '@angular/core';
import {MediaMatcher, Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class SidebarComponent implements AfterContentInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  @Input() openedSubject: Subject<boolean>;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngAfterContentInit() {
    this.openedSubject.subscribe(
      keepOpen => this.sidenav[keepOpen ? 'open' : 'close']()
    );
  }

  toggle() {
    this.openedSubject.next(!this.sidenav.opened);
  }

  dismissSidebar() {
    this.openedSubject.next(false);
  }

}