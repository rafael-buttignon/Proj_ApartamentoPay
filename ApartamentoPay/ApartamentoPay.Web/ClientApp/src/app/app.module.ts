import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApartamentoComponent } from './apartamento/apartamento.component';
import { LoginComponent } from './usuario/login/login.component';
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { UsuarioService } from './usuario/usuario.service';
import { ApartamentoService } from './apartamento/apartamento.service';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    ApartamentoComponent,
    FetchDataComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'apartamento', component: ApartamentoComponent, canActivate:[GuardaRotas] },
      { path: 'login', component: LoginComponent },
      { path: 'novo-usuario', component: CadastroComponent}

    ])
  ],
  providers: [
          UsuarioService,
          ApartamentoService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
