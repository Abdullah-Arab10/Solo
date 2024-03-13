interface plan {
  name: string;
  cost?: number;
  descripton: string;
  features: string[];
  active: boolean;
}
interface question {
  question: string;
  answer?: string;
}
interface faq {
  category: string;
  questions: question[];
}
export const Plans: plan[] = [
  {
    name: 'Basic',
    cost: 9,
    descripton: 'Beautifully simple project planning',
    active: false,
    features: [
      '10 Boards per Team',
      'Unlimited Cards',
      'Unlimited Lists',
      '10MB per File Attachment',
    ],
  },
  {
    name: 'Premium',
    cost: 19,
    descripton: 'Declutter your mind and save time with Premium.',
    active: false,

    features: [
      'Unlimited Boards per Team',
      'Unlimited Cards',
      'Unlimited Lists',
      '250MB per File Attachment',
      'Advanced Checklists',
      'Priority Support',
    ],
  },
  {
    name: 'Business',
    descripton: 'For large business and team. Contact sale!',
    active: false,

    features: [
      'Unlimited Boards per Team',
      'Unlimited Cards',
      'Unlimited Lists',
      '1GB per File Attachment',
      '100+ App Integrations',
      'Unlimited Command runs',
      'Priority Support',
    ],
  },
];
export const Faqs: faq[] = [
  {
    category: 'The basics',
    questions: [
      {
        question: 'How does it work?',
        answer: '',
      },
      {
        question: 'Which platform do you support?',
        answer: '',
      },
      {
        question: 'How does it work?',
        answer: '',
      },
      {
        question: 'How does it work?',
        answer: '',
      },
    ],
  },
  {
    category: 'Manage your plan',
    questions: [
      {
        question: 'How to upgrade a free to a paid plan?',
        answer: '',
      },
      {
        question: 'How to change a paid plan??',
        answer: '',
      },
      {
        question: 'How to cancel a paid plan??',
        answer: '',
      },
    ],
  },
  {
    category: 'Using Solo',
    questions: [
      {
        question: 'How to create a new workspace?',
        answer: '',
      },
      {
        question: 'What is a channel?',
        answer: '',
      },
      {
        question: 'How to invite team members?',
        answer: '',
      },
      {
        question: 'How to join a channel?',
        answer: '',
      },
    ],
  },
  {
    category: 'Security & Privacy',
    questions: [
      {
        question: 'Change password',
        answer: '',
      },
      {
        question: 'Enable 2FA Code',
        answer: '',
      },
      {
        question: 'How to delete an account?',
        answer: '',
      },
      {
        question: 'Refund policy',
        answer: '',
      },
    ],
  },
];
