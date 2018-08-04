import { ChatServiceProvider } from './../../providers/chat-service/chat-service';
import { IChat } from './../../models/chatModel';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  chats: IChat[] = [];
  message: string;
  sending: boolean;
  lang: string = 'en';

  constructor(public navCtrl: NavController, public navParams: NavParams, private _chat: ChatServiceProvider) {
  }
  ionViewDidLoad() {
    // subscribe to pusher's event
    this._chat.getChannel()
      .bind('chat', data => {
        if (data.type !== 'bot') {
          data.isMe = true;
        };
        this.chats.push(data);
      });
  }
  sendMessage() {
    this.sending = true;
    this._chat.sendMessage(this.message, this.lang)
      .subscribe(resp => {
        this.message = '';
        this.sending = false;
      }, err => {
        this.sending = false;
      });
  }
}