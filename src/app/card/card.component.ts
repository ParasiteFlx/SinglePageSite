import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent {

   cards = [{title: "The Hunt is calling",
            text:"You get up, open the door and venture into the darkest and deepest woods in search of the mythical deer.",
            buttonText:"Observe",
            result:"The mystical beast appears. You are in shock because of it's beauty. The deer looks at you and you faint!"},
            {title:"Drink up",
             text:"You ask for a mug of ale and drink it rapidly. You ask for another one, and another one...",
             buttonText:"Drink some more",
             result:"You are so drunk that you fall asleep!"},
            {title:"Fist fight",
             text:"A man from across the room stares you down. You don't accept this behaviour so you go and challenge him to a fight.",
             buttonText:"Fight!",
             result:"You give him a direct hit and knock him out. The crowd cheers!",},
            {title:"Tired",
             text:"You feel a little bit sleepy, so you head home.",
             buttonText:"Sleep",
             result:"You have a horrible nightmare!"},
             {title:"Gluttony",
              text:"You get hungrier and hungrier, so you order everything from the menu.",
              buttonText:"EAT!",
              result:"You ate so much that your shir ripped off."},
            {title:"Sketchy Drink",
             text:"The tavernkeeper comes and pours you a glass of green liquid and says :It's the best I have!",
             buttonText:"Drink up!",
             result:"Suddenly you are in the middle of nowhere, in the mountains."},
             {title:"Darkness",
              text:"The lights suddenly go out and terrible roar is heard from the basement.",
              buttonText:"Run!",
              result:"You push the table and start running for the door. The door is locked. Screams fill the room. You die."}
            ]

    result(result:string)
    {
      alert(result);
    }   

}
