import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  imports: [],
  templateUrl: './lesson2.component.html',
  styleUrl: './lesson2.component.css'
})
export class Lesson2Component {
  // You can add dynamic content here if necessary, for example, for data binding
  definition = [
    "Understanding the current situation.",
    "Identifying the root cause of the problem.",
    "Developing an effective action plan.",
    "Executing the plan until the problem is solved."
  ];

  keyCharacteristics = [
    "Realize the problem.",
    "Identify the root cause.",
    "Take actions to fix it."
  ];

  commonMistakes = [
    "Assumption without Action: 'I need to raise my grades,' but no changes made.",
    "Drastic but Ineffective Actions: Quit soccer team → No improvement if root cause is study effectiveness."
  ];

  problemSolvingSteps = {
    step1: "Understand the Situation",
    step2: "Identify the Root Cause",
    step3: "Develop a Plan",
    step4: "Execute and Adjust as Necessary"
  };

  benefits = [
    "Break Down Complex Problems: Divide big problems into smaller, manageable ones.",
    "Build Confidence: Reduces panic. Equips you to solve problems in grades, work, and personal life."
  ];
}
