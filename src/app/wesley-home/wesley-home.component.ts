import { Component, OnInit } from '@angular/core';
import { WesleyTasksService } from '../wesley-tasks.service';

@Component({
  selector: 'app-wesley-home',
  templateUrl: './wesley-home.component.html',
  styleUrls: ['./wesley-home.component.css'],
})
export class WesleyHomeComponent implements OnInit {
  constructor(public listaTasks: WesleyTasksService) {}

  ngOnInit() {}
}
