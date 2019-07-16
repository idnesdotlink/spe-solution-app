import { Component } from '@angular/core';
import { QuestionService } from './services/question/question.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './slide-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'spe-solution-app';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
