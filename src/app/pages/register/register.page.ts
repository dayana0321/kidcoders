import { Component, OnInit , ViewChild} from '@angular/core';
import{PostService} from '../../posts/post.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('usuario_id') usuario_id: NgModel;
  @ViewChild('usuario_nombre') usuario_nombre: NgModel;
  @ViewChild('usuario_apellido') usuario_apellido: NgModel;
  @ViewChild('usuario_correo') usuario_correo: NgModel;
  @ViewChild('usuario_contrasenia') usuario_contrasenia: NgModel;
  @ViewChild('usuario') usuario: NgModel;

  
  constructor(private postService:PostService, private router: Router) { }

  ngOnInit() {
    
  }
 
  saveUser() {
    const usuario_id = this.usuario_id.value;
    const usuario_nombre = this.usuario_nombre.value;
    const usuario_apellido = this.usuario_apellido.value;
    const usuario_correo = this.usuario_correo.value;
    const usuario_contrasenia = this.usuario_contrasenia.value;
    const usuario = this.usuario.value;

    const userData = {
      data: {
        usuario_id,
        usuario_nombre,
        usuario_apellido,
        usuario_correo,
        usuario_contrasenia,
        usuario
      }
    };

    console.log('Datos del usuario:', usuario_id, usuario_nombre, usuario_apellido, usuario_correo, usuario_contrasenia, usuario);

    this.postService.createUser(userData)
    .subscribe(
      (res) => {
        console.log('Usuario creado:', res);
        // Realizar acciones adicionales si es necesario
        this.router.navigate(['/login']);
      },
      (err) => {
        console.error('Error al crear usuario:', err);
        // Manejar errores si es necesario
      }
    );
  }
}