import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  message: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log('🚀 -> sample.component.ts -> ngOnInit -> data', data);
      this.message = data.message.value;
    });
  }
}
