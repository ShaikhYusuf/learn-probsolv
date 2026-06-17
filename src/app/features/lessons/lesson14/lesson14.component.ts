import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson14',
  imports: [],
  templateUrl: './lesson14.component.html',
  styleUrl: './lesson14.component.css'
})
export class Lesson14Component {
  sections = [
    {
      id: 'dream-overview',
      title: 'John’s Dream',
      content: `
        John Octopus dreams of becoming a Hollywood CGI movie director, but he knows that achieving such a big goal requires a solid foundation. 
        His first step is to acquire the tools to learn CGI animation—a computer. 
        To ensure success, John needs to transform his vague dream into a clear and actionable goal.
      `
    },
    {
      id: 'goal-setting',
      title: 'Step 1: Setting a Clear Goal',
      content: `
        To set an effective goal, John must answer three critical questions:
      `,
      listItems: [
        'What does he want?',
        'When does he want it?',
        'What specific conditions apply?'
      ],
      additionalContent: `
        After researching computers suitable for CGI, John decides on a $500 used Apple computer, ideal for beginners in animation. 
        He also sets a firm deadline: he must acquire the computer within six months to start designing his family’s holiday card by December. 
        Finally, John specifies that he does not want to borrow money or rent a computer—he intends to purchase it outright using his own resources.
      `
    },
    {
      id: 'goal-statement',
      title: 'John’s Goal Statement',
      quote: `
        "I want to buy a $500 used Apple computer within six months without borrowing money from others."
      `,
      listItems: [
        'Specific: Defines the type of computer and cost.',
        'Time-bound: Sets a clear six-month deadline.',
        'Condition-based: Outlines how the goal will be achieved (without borrowing).'
      ]
    },
    {
      id: 'importance-of-goals',
      title: 'The Importance of Specific Goals',
      content: `
        John’s initial thought, "I want a computer," lacked clarity. 
        The refined goal, on the other hand, provides:
      `,
      listItems: [
        'A clear target to aim for.',
        'A timeframe to motivate action.',
        'Defined parameters for decision-making (e.g., no borrowing).'
      ],
      additionalContent: `
        By establishing this specific goal, John lays the groundwork for a focused action plan to achieve it.
      `
    }
  ];
}
