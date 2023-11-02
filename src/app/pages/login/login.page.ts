import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostService } from 'src/app/posts/post.service';
import {UserService} from 'src/app/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users: any = []
  usuario: string = '';
  contrasena: string = '';
  logueado = false;

  constructor( private postservice: PostService, private navCtrl: NavController, private userService: UserService) { }

  ngOnInit() {
    this.postservice.getUsers().subscribe(
      (res:any) => {
        //this.users = res;
        this.users = res.data;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  iniciarSesion(){
    //Credenciales captadas del usuario
    const nombreUsuario = this.usuario;
    const contrasena = this.contrasena;
    


    console.log(nombreUsuario);
    console.log(contrasena);

    // Buscar un usuario en el arreglo por nombre de usuario y contraseña
    const usuarioEncontrado = this.users.find((user: any) => {
    return user.attributes.usuario === nombreUsuario && user.attributes.usuario_contrasenia === contrasena;
    });

    this.userService.setUser(usuarioEncontrado);

    if(usuarioEncontrado){
      console.log(usuarioEncontrado);
      console.log("Usuario correcto");
      this.logueado = true;
      this.navCtrl.navigateForward('/curses');
    }else{
      console.log("Mal");
      this.logueado = false;
    }
  }

  
  

}
