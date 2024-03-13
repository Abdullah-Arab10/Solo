import { Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent {
  advantages: advantage[] = [
    {
      title1: 'Protect Your',
      title2: 'Data',
      icon: 'assets/icons/protect.svg',
      text: '4,729 curated design resources to energize your creative workflow',
    },
    {
      title1: 'Super Smart',
      title2: 'Search',
      icon: 'assets/icons/search.svg',
      text: '4,729 curated design resources to energize your creative workflow',
    },

    {
      title1: 'Control everything',
      title2: 'in one place ',
      icon: 'assets/icons/control.svg',
      text: '4,729 curated design resources to energize your creative workflow',
    },
    {
      title1: 'Work better',
      title2: 'together',
      icon: 'assets/icons/circle.svg',
      text: '4,729 curated design resources to energize your creative workflow',
    },

    {
      title1: '24/7 Live Customer',
      title2: 'Support',
      icon: 'assets/icons/support1.svg',
      text: '4,729 curated design resources to energize your creative workflow',
    },

    {
      title1: 'Project',
      title2: 'Management',
      icon: 'assets/icons/paper1.svg',
      text: '4,729 curated design resources to energize your creative workflow',
    },
    {
      title1: 'Workflow',
      title2: 'builde',
      icon: 'assets/icons/r-chat1.svg',
      text: '4,729 curated design resources to energize your creative workflow',
    },
    {
      title1: 'Bring your team in',
      title2: 'channels',
      icon: 'assets/icons/puzzle-toy1.svg',
      text: '4,729 curated design resources to energize your creative workflow',
    },
  ];
}
interface advantage {
  title1: string;
  title2: string;
  icon: string;
  text: string;
}
