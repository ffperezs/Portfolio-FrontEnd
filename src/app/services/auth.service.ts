import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/model/jwt-dto';
import { LoginUsuario } from 'src/model/login-usuario';
import { NuevoUsuario } from 'src/model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl:string = "http://localhost:8080/auth/";

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUsuario)
  } 
}
