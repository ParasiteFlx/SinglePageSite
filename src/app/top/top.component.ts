import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
   
   moreInfo()
   {
      alert("Marble Town is a small settlement near the Rickety mountains. In this town you grew up with struggles and happy moments as any human should. Tonight you went to the tavern to cool off.")
   }

}
