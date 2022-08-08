import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  subject =  {
    name: 'Angular',
    description: `Angular is an open framework and
  platform for creating Single Page Applications, written in TypeScript
  and supported and developed by Google.`,
    thumbnail: 'angular.svg'
  };

  subject_list = [
    {
      name: 'Angular',
      description: `Angular is an open framework and
    platform for creating Single Page Applications, written in TypeScript
    and supported and developed by Google.`,
      thumbnail: 'angular.svg'
    },
    {
      name: 'TypeScript',
      description: `TypeScript is a strongly typed, object oriented, compiled language.
       It was designed by Anders Hejlsberg (designer of C#) at Microsoft.`,
      thumbnail: 'typescript.svg'
    },
    {
      name: 'Kotlin',
      description: `Kotlin is a modern, trending programming language. Kotlin is easy to learn,
      especially if you already know Java (it is 100% compatible with Java).`,
      thumbnail: 'kotlin.svg'
    },
    {
      name: 'Java',
      description: `Java is a high-level, class-based, object-oriented programming language that is designed to
       have as few implementation dependencies as possible.`,
      thumbnail: 'java.svg'
    },
    {
      name: 'JavaScript',
      description: `JavaScript often abbreviated JS, is a programming language that is one of the core technologies
       of the World Wide Web, alongside HTML and CSS.`,
      thumbnail: 'javascript.svg'
    },

  ]

  dataFromChild(data:any){
    this.subject = data
  }
}
