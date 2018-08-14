import {Component, OnInit} from '@angular/core';
import {MessageService} from '../common/message.service';
import {User} from './user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor(private messageService: MessageService) {
  }

  model: User = new User();

  submit() {
    this.messageService.success(`firstName: ${this.model.firstName}, lastName: ${this.model.lastName}, group: ${this.model.group}`);
  }

  clear() {
    this.model = new User();
    this.messageService.info('Cleared form');
  }

  ngOnInit() {
  }

}
