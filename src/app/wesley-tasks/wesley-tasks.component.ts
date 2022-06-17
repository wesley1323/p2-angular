import { Component, OnInit } from '@angular/core';
import { WesleyTasksService } from '../wesley-tasks.service';

@Component({
  selector: 'app-wesley-tasks',
  templateUrl: './wesley-tasks.component.html',
  styleUrls: ['./wesley-tasks.component.css'],
})
export class WesleyTasksComponent implements OnInit {
  constructor(public listaTasks: WesleyTasksService) {}

  ngOnInit() {}
}
