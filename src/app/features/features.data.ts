interface feature {
  icon: string;
  title: string;
  description: string;
}
interface comment {
  id: number;
  comment: string;
  rating: number;
  author: string;
  image: string;
  date: string;
}
interface faq {
  question: string;
  answer: string;
}
export const Features: feature[] = [
  {
    icon: 'assets/icons/todo.svg',
    title: 'Your to-do list. Done.',
    description:
      '4,729 curated design resources to energize your creative workflow',
  },
  {
    icon: 'assets/icons/folder.svg',
    title: 'One place for your team',
    description:
      '4,729 curated design resources to energize your creative workflow',
  },
  {
    icon: 'assets/icons/comment.svg',
    title: 'Pop in to Talk',
    description:
      '4,729 curated design resources to energize your creative workflow',
  },
];
export const Comments: comment[] = [
  {
    id: 0,
    comment:
      '“ Solo is a powerful app that can connect a lot of services I’m using. It is so flexible!”',
    rating: 5,
    author: 'Jaida Barton',
    image: 'assets/images/author-1.png',
    date: '2 days ago',
  },
  {
    id: 1,
    comment:
      '“ Solo is a powerful app that can connect a lot of services I’m using. It is so flexible!”',
    rating: 5,
    author: 'Jaida Barton',
    image: 'assets/images/author-2.png',
    date: '2 days ago',
  },
];
export const Faqs: faq[] = [
  {
    question: 'How does it work?',
    answer:
      "4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world.",
  },
  {
    question: 'Which platform do you support?',
    answer:
      "4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world.",
  },
  {
    question: 'How do I invite my teammates?',
    answer:
      "4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world.",
  },
  {
    question: 'Do you have annual plan?',
    answer:
      "4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world.",
  },
  {
    question: 'How do I create a new workspace ?',
    answer:
      "4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world.",
  },
  {
    question: 'How do I set roles & permissions?',
    answer:
      "4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world.",
  },
];
