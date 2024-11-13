import { Component, OnInit } from '@angular/core';
import { Schedule } from './schedule.model';
import { ScheduleService } from './schedule.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
