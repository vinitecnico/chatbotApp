import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


declare const Pusher: any;

@Injectable()
export class PusherProvider {
  public _pusher : any;

  constructor(public http: HttpClient) {
    this._pusher = new Pusher('dc3e73c14597b193513a', {
      cluster: 'us2',
      encrypted: true
    });
  }


  getPusher(){
    return this._pusher;
  }

}