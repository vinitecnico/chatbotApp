import { PusherProvider } from './../pusher-service/pusher-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ChatServiceProvider {

  private _url = 'https://chatbotwebapi.herokuapp.com';
  //'http://localhost:8080';
  private _channel: any;
  constructor(public http: HttpClient, private _pusher: PusherProvider) {
    this._channel = this._pusher.getPusher().subscribe('chat-bot');
  }


  sendMessage(message: string): Observable<any> {
    const param = {
      type: 'human',
      message,
    };
    return this.http.post(`${this._url}/api/message`, param)
  }

  getChannel() {
    return this._channel;
  }
}