
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatListModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'probsolve';
  isMenuActive = false; // Initialize menu visibility
  activeTab = 'Explanation'; // Default active tab
  selectedMenuItem: any = null; // Track selected menu item for submenu display

  menuItems = [
    { name: 'Problem-Solving Kids and Company', url: '', quiz: 'quiz/1' },
    { name: 'Problem Solving', url: './les2', quiz: 'quiz/2' },
    { name: 'Problem-Solving Toolbox: Logic Tree', url: 'les3', quiz: 'quiz/3' },
    { name: 'SAVE THE MUSHROOM LOVERS!', url: 'les4', quiz: 'quiz/4' },
    { name: 'Diagnosis of the Situation', url: 'les5', quiz: 'quiz/5' },
    { name: 'Developing a Hypothesis', url: 'les6', quiz: 'quiz/6' },
    { name: 'Determining the Analyses and Information Required', url: 'les7', quiz: 'quiz/7' },
    { name: 'Problem-Solving Toolbox: The Design Plan', url: 'les8', quiz: 'quiz/8' },
    { name: 'Steps to Developing a Wide Variety of Solutions', url: 'les9', quiz: 'quiz/9' },
    { name: 'Prioritize the Actions', url: 'les10', quiz: 'quiz/10' },
    { name: 'Develop an Implementation Plan', url: 'les11', quiz: 'quiz/11' },
    { name: 'The Outcome of the Mushroom Lovers’ Concert', url: 'les12', quiz: 'quiz/12' },
    { name: 'Fishy Goals and Solid Achievements', url: 'les13', quiz: 'quiz/13' },
    { name: 'John’s Big Dream and His First Goal: A Clear Path Forward', url: 'les14', quiz: 'quiz/14' },
    { name: 'Step 2: Determining the Gap Between the Goal and Current Situation', url: 'les15', quiz: 'quiz/15' },
    { name: 'Lesson 16: Generating Options and Ideas to Close the Gap', url: 'les16', quiz: 'quiz/16' },
    { name: 'Lesson 17: Selecting the Best Ideas and Formulating a Hypothesis', url: 'les17', quiz: 'quiz/17' },
    { name: 'Lesson 18: Problem-Solving Toolbox: Hypothesis Pyramid', url: 'les18', quiz: 'quiz/18' },
    { name: 'Lesson 19: 4A. Determining the Analyses and Information Required to Test the Hypothesis', url: 'les19', quiz: 'quiz/19' },
    { name: 'Lesson 20: 4B. Analyze and Develop Action Plan', url: 'les20', quiz: 'quiz/20' },
  ];

  tabs = ['Explanation', 'Quiz'];

  constructor(private router: Router) {
    this.selectedMenuItem = this.menuItems[0];
  }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  selectMenuItem(item: any): void {
    this.selectedMenuItem = this.selectedMenuItem === item ? null : item;
    this.isMenuActive = false;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;

    if (this.selectedMenuItem) {
      const route = this.activeTab === 'Explanation' ? this.selectedMenuItem.url : this.selectedMenuItem.quiz;
      if (route) this.router.navigate([route]);
    }
  }

  getRouterLink(item: any): string {
    return item.url;
  }
}
