import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import { Number } from 'src/app/interfaces/Number';
@Component({
  selector: 'app-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.css']
})
export class NumberSelectorComponent implements OnInit {
  input_: string = '';
  list_: Array<number> = [];
  N: string = ''; 
  y: number = 0;
  clearPressed = false;
  clicked_list_: Array<string> = [''];
  clear_was_clicked: boolean = false;
  colorsArray!: boolean[];
  buttonDisabled: boolean = false;
  constructor() {
    this.colorsArray = [];
    for (let i = 0; i < 20; i++) {
    this.colorsArray.push(false);
  } }
  ngOnInit(): void {}

  @Output() messageEvent = new EventEmitter<string>();

  @Output() numberEvent = new EventEmitter<string>();
  @Output() listEvent = new EventEmitter<string>();

  @Output() data: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() clearEvent = new EventEmitter<boolean>();
  @Output() newNumber= new EventEmitter<Number>();
  ifClicked(event: any, id:number)
  { 
    this.colorsArray[id] = !this.colorsArray[id];
  }
 
  sendClearMessage(clear: boolean)
  {
    this.clearEvent.emit(this.clearPressed);
  }
  sendArrayMessage(uh: Array<string>)
  {
    this.data.emit(this.clicked_list_)
  }
  sendListMessage(Num:string){
    this.listEvent.emit(Num);
  }
  sendMessage() {
    this.messageEvent.emit(this.input_);
  }
  //receieves the input
  receiveMessage($event: string) {
    this.input_ = $event;
  }
  //Number interface
  @Input() Numbers:Number={
    number_select: 0,
    bet_select: 0,
    result: '',
    input: '',
    pressed: 0,
    clear: false,
    betTotal: 0
  };
  //on number press
  pressNum(num: string) 
  {
    this.N = num;
    
 
    this.Numbers.input = this.Numbers.input + num;
    
    this.input_ = this.Numbers.input;
    if (this.y < 5) 
    {
      this.y++;
    }

    this.Numbers.pressed++;
    this.list_.push(this.y);
    this.clicked_list_.push(this.N);
    this.sendListMessage(this.N);
    this.buttonGetsDisabled();
  }
  // this clears the entire internet clearly
  allClear() 
  {
    this.clearPressed = true;
    this.Numbers.result = '';
    this.Numbers.input = '';
    this.input_ = '';
    this.messageEvent.emit(this.input_);
    this.list_ = [];
    this.Numbers.pressed = 0;
    this.y = 0;
    this.list_ = [];
    this.clicked_list_ =[];
    this.sendClearMessage(this.clearPressed);
    this.Numbers.clear = true;
    this.Numbers.betTotal = 0;
    this.clear_was_clicked = false;
    this.colorsArray = [];
  }
  buttonGetsDisabled()
  {
    if (this.y == 5) {
      this.buttonDisabled = true;
    }
    else
    
    this.buttonDisabled = false;
  }


}
