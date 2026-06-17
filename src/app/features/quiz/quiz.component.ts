import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, MatIconModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  quizzes: any[] = [];
  selectedAnswers: { [key: number]: number } = {};
  submitted = false;
  lessonId!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.lessonId = +params['lessonId'];
      this.loadQuizzes(this.lessonId);
    });
  }

  loadQuizzes(lessonId: number): void {
    const url = `./lesson${lessonId}.json`;
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.quizzes = data;
      },
      error: (error) => {
        console.error('Error loading quiz data:', error);
      },
    });
  }

  selectOption(quizId: number, optionIndex: number): void {
    if (!this.submitted) {
      this.selectedAnswers[quizId] = optionIndex;
    }
  }

  submitAnswers(): void {
    if (Object.keys(this.selectedAnswers).length < this.quizzes.length) {
      alert('Please answer all the questions before submitting.');
      return;
    }
    this.submitted = true;
  }

  isCorrectOption(quiz: any, optionIndex: number): boolean {
    if (!quiz) return false;
    return quiz.answer === optionIndex || quiz.options[optionIndex - 1] === quiz.answer;
  }

  getClass(quizId: number, optionIndex: number): string {
    if (!this.submitted) {
      return this.selectedAnswers[quizId] === optionIndex ? 'highlight' : '';
    }

    const quiz = this.quizzes.find((quiz) => quiz.id === quizId);
    if (!quiz) return '';

    const isCorrect = this.isCorrectOption(quiz, optionIndex);
    const isSelected = this.selectedAnswers[quizId] === optionIndex;

    if (isCorrect) {
      return 'correct';
    } else if (isSelected) {
      return 'incorrect';
    } else {
      return '';
    }
  }
}
