import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-welcome',
  templateUrl: './ng-welcome.component.html',
  styleUrls: ['./ng-welcome.component.scss'],
})
export class NgWelcomeComponent implements OnInit {
  title = 'ssr-demo';

  constructor() {}

  ngOnInit(): void {}
}
