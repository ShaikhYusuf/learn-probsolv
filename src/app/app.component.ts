import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuizService } from './shared/quiz.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'probsolve';
  isSidebarActive = false;
  selectedLessonId: string = '1';
  siteTitle = 'Problem Solving Guide';

  menuItems = [
    { id: '1', name: 'Problem-Solving Kids and Company', url: 'les1', quiz: 'quiz/1' },
    { id: '2', name: 'Problem Solving', url: 'les2', quiz: 'quiz/2' },
    { id: '3', name: 'Problem-Solving Toolbox: Logic Tree', url: 'les3', quiz: 'quiz/3' },
    { id: '4', name: 'SAVE THE MUSHROOM LOVERS!', url: 'les4', quiz: 'quiz/4' },
    { id: '5', name: 'Diagnosis of the Situation', url: 'les5', quiz: 'quiz/5' },
    { id: '6', name: 'Developing a Hypothesis', url: 'les6', quiz: 'quiz/6' },
    { id: '7', name: 'Determining the Analyses and Information Required', url: 'les7', quiz: 'quiz/7' },
    { id: '8', name: 'Problem-Solving Toolbox: The Design Plan', url: 'les8', quiz: 'quiz/8' },
    { id: '9', name: 'Steps to Developing a Wide Variety of Solutions', url: 'les9', quiz: 'quiz/9' },
    { id: '10', name: 'Prioritize the Actions', url: 'les10', quiz: 'quiz/10' },
    { id: '11', name: 'Develop an Implementation Plan', url: 'les11', quiz: 'quiz/11' },
    { id: '12', name: 'The Outcome of the Mushroom Lovers’ Concert', url: 'les12', quiz: 'quiz/12' },
    { id: '13', name: 'Fishy Goals and Solid Achievements', url: 'les13', quiz: 'quiz/13' },
    { id: '14', name: 'John’s Big Dream and His First Goal: A Clear Path Forward', url: 'les14', quiz: 'quiz/14' },
    { id: '15', name: 'Step 2: Determining the Gap Between the Goal and Current Situation', url: 'les15', quiz: 'quiz/15' },
    { id: '16', name: 'Lesson 16: Generating Options and Ideas to Close the Gap', url: 'les16', quiz: 'quiz/16' },
    { id: '17', name: 'Lesson 17: Selecting the Best Ideas and Formulating a Hypothesis', url: 'les17', quiz: 'quiz/17' },
    { id: '18', name: 'Lesson 18: Problem-Solving Toolbox: Hypothesis Pyramid', url: 'les18', quiz: 'quiz/18' },
    { id: '19', name: 'Lesson 19: Determining the Analyses and Info to Test Hypothesis', url: 'les19', quiz: 'quiz/19' },
    { id: '20', name: 'Lesson 20: Analyze and Develop Action Plan', url: 'les20', quiz: 'quiz/20' },
  ];

  constructor(private router: Router, public quizService: QuizService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      const match = url.match(/\/(?:les|quiz)(?:\/)?(\d+)/);
      if (match) {
        this.selectedLessonId = match[1];
      }
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('participant') != null;
  }

  getUserName(): string {
    return this.quizService.getParticipantName();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/register']);
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  selectLesson(id: string, url: string): void {
    this.selectedLessonId = id;
    this.router.navigate([url]);
    if (window.innerWidth <= 992) {
      this.isSidebarActive = false;
    }
  }

  navigate(url: string): void {
    this.router.navigate([url]);
    if (window.innerWidth <= 992) {
      this.isSidebarActive = false;
    }
  }

  getCurrentStep() {
    const url = this.router.url;
    let match = url.match(/\/les(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      return { type: 'lesson', num, index: (num - 1) * 2 };
    }
    match = url.match(/\/quiz\/(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      return { type: 'quiz', num, index: (num - 1) * 2 + 1 };
    }
    return null;
  }

  getStepUrl(index: number): string {
    const num = Math.floor(index / 2) + 1;
    const subStep = index % 2;
    if (subStep === 0) return `les${num}`;
    return `quiz/${num}`;
  }

  hasPreviousStep(): boolean {
    const step = this.getCurrentStep();
    return step !== null && step.index > 0;
  }

  hasNextStep(): boolean {
    const step = this.getCurrentStep();
    return step !== null && step.index < 39;
  }

  goToPreviousStep(): void {
    const step = this.getCurrentStep();
    if (step && this.hasPreviousStep()) {
      const prevUrl = this.getStepUrl(step.index - 1);
      const prevLessonId = (Math.floor((step.index - 1) / 2) + 1).toString();
      this.selectedLessonId = prevLessonId;
      this.router.navigate([prevUrl]);
    }
  }

  goToNextStep(): void {
    const step = this.getCurrentStep();
    if (step && this.hasNextStep()) {
      const nextUrl = this.getStepUrl(step.index + 1);
      const nextLessonId = (Math.floor((step.index + 1) / 2) + 1).toString();
      this.selectedLessonId = nextLessonId;
      this.router.navigate([nextUrl]);
    }
  }

  getPreviousButtonText(): string {
    const step = this.getCurrentStep();
    if (!step) return 'Previous';
    if (step.type === 'quiz') return 'Back to Lesson';
    return 'Back to Quiz';
  }

  getNextButtonText(): string {
    const step = this.getCurrentStep();
    if (!step) return 'Next';
    if (step.type === 'lesson') return 'Go to Quiz';
    return 'Next Lesson';
  }

  getStepIndicatorText(): string {
    const step = this.getCurrentStep();
    if (!step) return '';
    const typeLabel = step.type === 'lesson' ? 'Content' : 'Quiz';
    return `Lesson ${step.num} of 20: ${typeLabel}`;
  }
}
