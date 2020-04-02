import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';
import { User } from './user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  model: User;
  isBusy: boolean = false;

  constructor(private messageService: MessageService) {
    this.model = new User();
  }

  submit() {
    this.isBusy = true;
    setTimeout(() => {
      this.messageService.success(`Submitted lastName: ${this.model.lastName}, firstName: ${this.model.firstName}, Group: ${this.model.group}`);
      this.isBusy = false;
    }, 1000);

  }

  clear() {
    this.model = new User();
    this.messageService.info('Cleared form');
  }

  ngOnInit() { }
}
