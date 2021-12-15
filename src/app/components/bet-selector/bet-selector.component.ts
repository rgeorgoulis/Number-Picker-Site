import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Number } from 'src/app/interfaces/Number';
@Component({
  selector: 'app-bet-selector',
  templateUrl: './bet-selector.component.html',
  styleUrls: ['./bet-selector.component.css']
})
export class BetSelectorComponent implements OnInit {

  bet_selection!: number;
  bet_string!: string;
  total: number = 0;
  clearPressed: boolean = false;
  constructor() { }

  ngOnInit(): void {}
  @Input() Numbers:Number={
    number_select: 0,
    bet_select: 0,
    result: '',
    input:'',
    pressed: 0,
    clear: false,
    betTotal: 0
  };
  @Output() betEvent = new EventEmitter<number>(); // sends betEvent to calculation area
  @Output() betPressedEvent = new EventEmitter<number>(); // sends betPressedEvent to calculation area
  
  //sends the bet total over to the calculation area
  sendBetEvent(betNum: number)
  {
    this.getTotal();
    this.betEvent.emit(this.total);
  }
  // the onclick of bet buttons
  pressNum(num: string) 
  {
    this.bet_string = num;
    this.ConvertStringToNumber(num);
    this.getTotal();
    this.sendBetEvent(this.getTotal());
    this.Numbers.bet_select = Number(num);
  }
  // converts the strings to numbers
  ConvertStringToNumber(input: string) 
  {
    this.Numbers.bet_select = Number(input);
    if (this.Numbers.clear == true) {
      this.Numbers.bet_select = 0;
    }
    this.addNumbers(this.Numbers.bet_select);

    return this.Numbers.bet_select;
    
  }
 // adds the bet numbers together
  addNumbers(num: number)
  {
    this.Numbers.betTotal += num;
    this.total += num;
  }
  //returns the total
  getTotal()
  {
    this.Numbers.betTotal = this.total;

    return this.total && this.Numbers.betTotal;
  }
  // this should clear the total but its broken :(
  Clear()
  {
    if (this.clearPressed == true) 
    {
      this.Numbers.betTotal = 0;
      this.total = 0;
      }
  }




  
  // -------THINGS THAT I FORGOT WHAT THEY DO LOL OR DONT WORK ----------//
  // sends the pressed button to the bet select tbh i dont even know why this is here at this point
  sendBetPressed()
  {
    this.betPressedEvent.emit(this.Numbers.bet_select);
  }
  // this is broken ill take the L
  receiveClear($event:boolean){
    this.clearPressed = $event;
      this.Clear();
    
  }
}
