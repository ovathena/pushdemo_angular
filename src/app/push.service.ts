import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class pushService {
  
  constructor(private afMessaging: AngularFireMessaging,
              private httpClient: HttpClient) {
			  
    this.afMessaging.messages.subscribe((message) => {
      console.log('Received a notification:', message);
      // call your function here
    });
			  }
  requestPermission() {
    this.afMessaging.requestPermission
      .subscribe(
        () => {
          console.log('Permission granted!');
          this.afMessaging.getToken.subscribe((token: any) => {
            console.log(token);
            this.sendToken(token); 
          });
        },
        (error: any) => { console.error(error); },  
      );

  }

  private sendToken(token: any) {
    const payload = {
      token: token
    };
    this.httpClient.post('http://127.0.0.1:443/api/store-token', payload).subscribe();
  }

}