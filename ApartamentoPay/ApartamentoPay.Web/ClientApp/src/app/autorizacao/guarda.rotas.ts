import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "../usuario/usuario.service";

@Injectable({
    providedIn: "root",
})

export class GuardaRotas implements CanActivate {

    constructor(private router: Router, private usuarioServico: UsuarioService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(this.usuarioServico.usuario_autenticado()){
         return true;   
        }

        this.router.navigate(['/login'], {queryParams:{returnUrl:state.url}});
        // se usuario autenticado
        return false;
    }

}