import { Component, OnInit } from '@angular/core';
import { QuestionsService } from "../questions.service";

@Component({
  selector: 'app-certificate',
  templateUrl: 'quiz.component.html',
  styleUrls: ['quiz.component.css']
})
export class QuizComponent implements OnInit {
  title = "Take a Quiz about Llama";
  questions = [];
  selectedAnswer = "";

  score = 0;
  currentQuestionNumber = 0;

  constructor(private questionsServive: QuestionsService) { }

  ngOnInit() {
    this.questions = this.questionsServive.getQuestionsList();
  }

  startQuiz() {
    this.currentQuestionNumber = 1;
    this.score = 0;
  }

  nextQuestion() {
    this.currentQuestionNumber = this.currentQuestionNumber + 1;
    this.selectedAnswer = "";
  }

  addScore() {
    this.score = this.score + 1;
    this.nextQuestion();
  }

}
