import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


let apiUrl = 'https://gravynodeapi.azurewebsites.net/';

@Injectable()
export class AuthServiceProvider {

  constructor(public httpclient: HttpClient , public http : Http ) {
    console.log('Hello AuthServiceProvider Provider');
  }


login(users) {
  console.log("user data ", users.name);
  return new Promise((resolve, reject) => {
    let headers = new Headers();
      
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      
  console.log("data andar",users);
  console.log("use", users.name);
  console.log("user", users.password);
  
  let body1 = new URLSearchParams();
            body1.set('name', users.name);
            body1.set('password', users.password );
            
  
      this.http.post(apiUrl+'login', body1.toString() , {headers: headers} )
        .map(res => res.json())
        .subscribe(data => {
          console.log("Server data",data);
          resolve(data);
        }, (err) => {
          reject(err);
        });
  });
  
  }

register(users) {

console.log(users);
  return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
          console.log("hai",users);

          let body1 = new URLSearchParams();
          body1.set('name', users.name);
          body1.set('emailaddress',users.emailaddress);
          body1.set('password', users.password);



console.log(users.name);
          
console.log('serverslog' ,body1);

      this.http.post(apiUrl+'registerbeta', body1.toString() , {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log("Server data",data);
        resolve(data);
      }, (err) => {
        reject(err);
      });
  });
}


getToken(user) {

  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log("hello",user.token);
    let body1 = new URLSearchParams();
    
    body1.set('userid', user.token);


    console.log('serverslog' ,body1);

    this.http.post(apiUrl+'getcurrentbalance', body1.toString() , {headers: headers})
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });

  });

}

send(users) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log("hai",users);

        let body1 = new URLSearchParams();
        body1.set('from', users.from);
        body1.set('to', users.to);
        body1.set('gravy', users.gravy);
    
        this.http.post(apiUrl+'transfercoins', body1.toString() , {headers: headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });


});
}



}
