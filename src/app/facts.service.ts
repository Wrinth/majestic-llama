import { Injectable } from '@angular/core';

@Injectable()
export class FactsService {
  facts = [
    {
      id: 1,
      story: 'Llamas are members of the camelid, or camel, family.',
      likes: 324,
      dislikes: 123
    },
    {
      id: 2,
      story: 'Camelids first appeared on the Central Plains of North America about 40 million years ago. About 3 million years ago, llamas\' ancestors migrated to South America.',
      likes: 32,
      dislikes: 12
    },
    {
      id: 3,
      story: 'Llamas were first domesticated and used as pack animals 4,000 to 5,000 years ago by Indians in the Peruvian highlands.',
      likes: 5,
      dislikes: 123
    },
    {
      id: 4,
      story: 'Llamas can grow as much as 6 feet tall.',
      likes: 434,
      dislikes: 82
    },
    {
      id: 5,
      story: 'Llamas weigh 280 to 450 pounds and can carry about a quarter of their body weight, so a 400-pound male llama can carry about 100 pounds on a trek of 10 to 12 miles with no problem.',
      likes: 93,
      dislikes: 102
    },
    {
      id: 6,
      story: 'Llamas know their own limits. If you try to overload a llama with too much weight, the llama is likely to lie down or simply refuse to move.',
      likes: 73,
      dislikes: 23
    },
    {
      id: 7,
      story: 'In the Andes Mountains of Peru, llama fleece has been shorn and used in textiles for about 6,000 years. Llama wool is light, warm and water-repellent.',
      likes: 132,
      dislikes: 20
    },
    {
      id: 8,
      story: 'Llamas are hardy and well suited to harsh environments.',
      likes: 1,
      dislikes: 0
    },
    {
      id: 9,
      story: 'Llamas are smart and easy to train.',
      likes: 2,
      dislikes: 0
    },
    {
      id: 10,
      story: 'Llamas are vegetarians and have efficient digestive systems.',
      likes: 435,
      dislikes: 54
    },
    {
      id: 11,
      story: 'A llama\'s stomach has three compartments. As you can see in this diagram, they are called the rumen, omasum and abomasum. A cow\'s stomach has four compartments.',
      likes: 85,
      dislikes: 3
    },
    {
      id: 12,
      story: 'Llama poop has almost no odor. Llama farmers refer to llama manure as "llama beans." It makes great, eco-friendly fertilizer. The Incas in Peru burned dried llama poop for fuel.',
      likes: 845,
      dislikes: 344
    },
    {
      id: 13,
      story: 'Llamas live to be about 20 years old.',
      likes: 1260,
      dislikes: 123
    },
    {
      id: 14,
      story: 'A baby llama is called a "cria." It\'s pronounced KREE-uh. Mama llamas usually only have one baby at a time. Llama twins are incredibly rare. Pregnancy lasts for about 350 days—nearly a full year. Crias weigh 20 to 35 pounds at birth.',
      likes: 784,
      dislikes: 23
    },
    {
      id: 15,
      story: 'Llamas come in a range of solid and spotted colors including black, gray, beige, brown, red and white.',
      likes: 142,
      dislikes: 1
    },
    {
      id: 16,
      story: 'Llamas are social animals and prefer to live with other llamas or herd animals.',
      likes: 15,
      dislikes: 20
    },
    {
      id: 17,
      story: 'A group of llamas is called a herd.',
      likes: 235,
      dislikes: 87
    },
    {
      id: 18,
      story: 'Llamas have two wild "cousins" that have never been domesticated: the vicuña and the guanaco.',
      likes: 45,
      dislikes: 23
    },
    {
      id: 19,
      story: 'Llamas don\'t bite. They spit when they\'re agitated, but that\'s mostly at each other.',
      likes: 756,
      dislikes: 234
    },
    {
      id: 20,
      story: 'The current population of llamas and alpacas in South America is estimated to be more than 7 million, and there are about 158,000 llamas and 100,000 alpacas in the U.S. and Canada today.',
      likes: 234,
      dislikes: 245
    },
    {
      id: 21,
      story: 'Yarn made from llama fiber is soft and lightweight, yet remarkably warm.',
      likes: 265,
      dislikes: 345
    },
    {
      id: 22,
      story: 'Trying to tell the difference between a llama and an alpaca? Two obvious things to look for: Llamas are generally about twice the size of alpacas, and alpacas have short, pointy ears, whereas llamas have much longer ears that stand straight up and give them an alert look.',
      likes: 234,
      dislikes: 765
    }
  ];

  constructor() { }

  getFactsList() {
    return this.facts;
  }

  updateLikeById(id) {
    for(let fact of this.facts) {
      if(fact.id == id) {
        fact.likes += 1;
      }
    }
  }

  updateDislikeById(id) {
    for(let fact of this.facts) {
      if(fact.id == id) {
        fact.dislikes += 1;
      }
    }
  }

}
