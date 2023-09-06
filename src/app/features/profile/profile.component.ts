import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  title = 'Decoded ID Token';

  user$ = this.auth.user$;

  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));  
  id_token$ = this.auth.idTokenClaims$;
  comany$ = this.id_token$.pipe(map((id_token) => JSON.stringify(id_token, null, 2)));  
  
  constructor(private auth: AuthService) {}
}
