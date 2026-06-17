import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson12',
  imports: [],
  templateUrl: './lesson12.component.html',
  styleUrl: './lesson12.component.css'
})
export class Lesson12Component {
  concertResults = [
    {
      title: 'Audience Turnout',
      details: [
        'Goal: Attract 200 attendees.',
        'Achieved: Over 200 people filled the gymnasium, exceeding expectations.'
      ]
    },
    {
      title: 'Audience Awareness and Desire',
      details: [
        '90% of the school became aware of the concert.',
        '50% of those who knew about it were motivated to attend.'
      ]
    },
    {
      title: 'Event Satisfaction',
      details: [
        'Post-concert surveys revealed that 90% of attendees planned to return for future events.'
      ]
    },
    {
      title: 'Atmosphere',
      details: [
        'The audience erupted with cheers and chants for the band, creating an electrifying atmosphere.',
        'Personal touches like Tofu’s jokes and stories kept the crowd engaged throughout the show.'
      ]
    }
  ];

  keyLessons = [
    'Prioritization Yields Results: Early wins built momentum for challenging tasks.',
    'Collaboration Multiplies Effort: Delegating tasks improved quality and saved time.',
    'Creativity Drives Engagement: Innovative strategies made the concert memorable.',
    'Adaptability is Crucial: Aligning plans with audience preferences ensured success.',
    'Comprehensive Planning Prevents Chaos: A structured plan ensured timely completion of tasks.'
  ];

  pathForward = [
    'Expand Their Audience: Consider holding concerts at nearby schools or community centers.',
    'Strengthen Branding: Build consistent themes across posters, social media, and performances.',
    'Enhance Fan Engagement: Develop new ways to interact with fans, such as Q&A sessions, online livestreams, or newsletters.'
  ];
}
