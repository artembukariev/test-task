import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  name: string;

//SignUp code example

  // public signUP(user: { email: string, password: string }): Observable<boolean> {
  //   return this.http.post(`${environment.apiUrl}/auth/signup`, user)
  //     .pipe(
  //       tap(tokens => {
  //         this.setSession(user.email, tokens);
  //       }),
  //       mapTo(true),
  //       catchError(error => {
  //         return of(false)
  //       })
  //     )
  // }
  //

  // logout() {
  //   this.loggedUser = undefined;
  //   this.removeTokens();
  // }
  set userName(name: string) {
    this.name = name;
  }

  public get userName(): string {
    return this.name;
  }

  isSignedIn() {
    return !!this.name
  }

  constructor() { }
}
