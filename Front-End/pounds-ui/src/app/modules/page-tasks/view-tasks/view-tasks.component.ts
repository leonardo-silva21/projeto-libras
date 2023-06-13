import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { Lesson } from 'src/app/models/lesson.model';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {
  userName!: string;
  lessons: Lesson[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getTask().subscribe(
      getLessons => this.lessons = getLessons
    )
    
    this.userName = this.userService.getUserName();
  }

}
