import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question/question.service';
import { MessagingService } from './services/firebase/messaging.service'
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './slide-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'spe-solution-app';
  questions: any[];
  message;

  constructor(service: QuestionService, private messagingService: MessagingService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
    const userId = 'user001';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
