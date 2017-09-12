import { Component, OnInit } from '@angular/core';
import {FactsService} from "../facts.service";

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  title = "Llama Fun Facts";
  facts = [];

  constructor(private factsService: FactsService) { }

  ngOnInit() {
    var tempFacts = this.factsService.getFactsList();

    for(var count = 0 ; count < tempFacts.length ; count++) {
      var tempFact = {
        id: 0,
        story: 'STORY',
        likes: 0,
        dislikes: 0
      };

      tempFact.id = count + 1;
      tempFact.story = tempFacts[count].story;
      tempFact.likes = tempFacts[count].likes;
      tempFact.dislikes = tempFacts[count].dislikes;

      this.facts.push(tempFact);
    }
  }

  userLike(id) {
    this.factsService.updateLikeById(id);
    for(var count = 0 ; count < this.facts.length ; count++) {
      if(this.facts[count].id == id) {
        this.facts[count].likes +=1;
        break;
      }
    }
  }

  userDislike(id) {
    this.factsService.updateDislikeById(id);
    for(var count = 0 ; count < this.facts.length ; count++) {
      if(this.facts[count].id == id) {
        this.facts[count].dislikes +=1;
        break;
      }
    }
  }

}
