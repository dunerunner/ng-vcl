import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEMOS } from "./demos";

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.router.events.subscribe((path) => {
      window.scrollTo(0, 0);
    });
  }

  get demos() {
    return DEMOS;
  }
}