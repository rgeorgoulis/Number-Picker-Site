
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Number } from 'src/app/interfaces/Number';
@Component({
  selector: 'app-calculation-area',
  templateUrl: './calculation-area.component.html',
  styleUrls: ['./calculation-area.component.css'],
})
export class CalculationAreaComponent {
  
  message!: string;
  N!: string;
  clicked_list_: Array<string> = [''];
  childData!: string[];
  clearPressed!: boolean;
  bett!: number;
  betPressed: number = 0;
  betToNum!: number;

  constructor() {  
  }
  @Output() numberEventReturn = new EventEmitter<string>();
  @Output() clearBet = new EventEmitter<boolean>();
  sendClearBet($event:Boolean)
  {
    if ($event == true) {
      this.clearBet.emit(true);
    }
    else
    this.clearBet.emit(false);
  }
  eventHandler(event:string[]){
    this.childData = event;
}
  sendMessage() {
    this.numberEventReturn.emit(this.message)
  }
  ngOnInit() {
  }
  @Input() Numbers:Number={
    number_select: 0,
    bet_select: 0,
    result: '',
    input:'',
    pressed: 0,
    clear: false,
    betTotal: 0
  };
  //clear
  receiveClear($event:boolean){
    this.clearPressed = $event;
    this.allClear2(this.clearPressed);
    this.sendClearBet($event);
  }
  receiveMessage($event: string) {
    this.message = $event;
  }
  receiveNumberMessage($event: string) {
    this.clearPressed = false;
    this.N = $event;
    this.push(this.N);
  }
  receiveBetPressedMessage()
  {
    this.betPressed += this.Numbers.bet_select;
  }
  //bet
  receiveBetMessage($event: number){
    const betNumber = $event;
    this.bett = betNumber;
  }
 
  allClear() 
  {
    this.message = '';
    if (this.clearPressed == true) {
      this.clicked_list_ = [];
      this.bett = 0;
      this.Numbers.betTotal = 0;
     
    }
    
  }
  allClear2(clearPressed:boolean) 
  {
    if(this.clearPressed == true)
      this.clicked_list_ = [];
      this.bett = 0;
  }
    
  
  push(N: string){
    this.clicked_list_.push(this.N);
  }
  
}
