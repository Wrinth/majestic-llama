import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsService {
  questions = [
    {
      id: 1,
      answer: 'b',
      question: 'How long do Llamas live?',
      options: ['10 – 20 years', '20 – 30 years', '30 – 40 years']
    },
    {
      id: 2,
      answer: 'a',
      question: 'What is the Llamas gestation period?',
      options: ['11 and a half months', '10 months', '8 and a half months']
    },
    {
      id: 3,
      answer: 'a',
      question: 'What age can you begin breeding female Llamas?',
      options: ['In 1 year', 'In 2 year', 'In 3 year']
    },
    {
      id: 4,
      answer: 'b',
      question: 'What age can you begin breeding male Llamas?',
      options: ['Between 1 and 2 years', 'Between 2 and 3 years', 'Between 3 and 4 years']
    },
    {
      id: 5,
      answer: 'b',
      question: 'How much weight can Llamas carry?',
      options: ['Between 40 – 80 lbs', 'Between 80 – 120 lbs', 'Between 120 – 160 lbs']
    },
    {
      id: 6,
      answer: 'a',
      question: 'When are llamas full grown?',
      options: ['When they are 3 and a half years.', 'When they are 3 years.', 'When they are 2 and a half years.']
    },
    {
      id: 7,
      answer: 'b',
      question: 'Are Llamas good travelers?',
      options: ['No', 'Yes', 'They don\'t travel']
    },
    {
      id: 8,
      answer: 'a',
      question: 'Are Llamas easy to train?',
      options: ['Yes', 'No', 'They attack human']
    }
  ];
  constructor() { }

  getQuestionsList() {
    return this.questions;
  }

}
