interface Description {
  icon: string;
  description: string;
}
interface Employee {
  image: string;
  name: string;
  position: string;
}
const IMAGES_PATH: string = 'assets/images/';

export const TeamDescription: Description[] = [
  {
    icon: 'assets/icons/vr.svg',
    description: 'Young & passionate',
  },
  {
    icon: 'assets/icons/creative.svg',
    description: 'Enthusiasm & creativity',
  },
  {
    icon: 'assets/icons/cheerfull.svg',
    description: 'Cheerful & comfortable',
  },
];
export const Employees: Employee[] = [
  {
    image: IMAGES_PATH + 'ava-1.png',
    name: 'Lexie Wolff',
    position: 'Communications Strategist',
  },
  {
    image: IMAGES_PATH + 'ava-2.png',
    name: 'Ida Flatley',
    position: 'Lead Research Producer',
  },
  {
    image: IMAGES_PATH + 'ava-3.png',
    name: 'Britney Barrows',
    position: 'Implementation Specialist',
  },
  {
    image: IMAGES_PATH + 'ava-4.png',
    name: 'Chelsey Corkery',
    position: 'Forward Interactions Developer',
  },
  {
    image: IMAGES_PATH + 'ava-1.png',
    name: 'Lexie Wolff',
    position: 'Communications Strategist',
  },
  {
    image: IMAGES_PATH + 'ava-2.png',
    name: 'Ida Flatley',
    position: 'Lead Research Producer',
  },
  {
    image: IMAGES_PATH + 'ava-3.png',
    name: 'Britney Barrows',
    position: 'Implementation Specialist',
  },
  {
    image: IMAGES_PATH + 'ava-4.png',
    name: 'Chelsey Corkery',
    position: 'Forward Interactions Developer',
  },
];
