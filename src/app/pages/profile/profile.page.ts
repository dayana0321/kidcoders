import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';
import {UserService} from 'src/app/user.service';
import { Router } from '@angular/router';
const pdfMake = require('pdfmake/build/pdfmake.js');
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; // Importa pdfFont
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  users: any = []
  user_id:any;
  progresos: any = [];
  usuario: any = {};
  curso: any = {};
  constructor( private postService: PostService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    //Obteniendo el usuario "logueado"
    const userData = this.userService.getUser();
    const id = userData.attributes.usuario_id;
    console.log(userData);
    console.log(id);
    

    //Validar usuario logueado con usuario tabla
    this.postService.getProgress().subscribe(
      (res:any) => {
        console.log(res);
        this.progresos = res.data;
        this.getUsuariosyCursos(id);
      },
      (err) => console.log(err)
    );
    
  }


  //Función pra haacer la validación
  getUsuariosyCursos(usuario_id:number){
    // Buscar el progreso asociado al usuario
    const progreso = this.progresos.find((progreso:any) => progreso.attributes.usuario.data.id === usuario_id);

    if (progreso) {
      // Si se encontró el progreso, obtener el curso asociado
      this.curso = progreso.attributes.curso.data.attributes;
      // Obtener el usuario
      this.usuario = progreso.attributes.usuario.data.attributes;

      // Aquí puedes trabajar con 'progreso', 'curso' y 'usuario' como lo necesites
      console.log('Usuario:', this.usuario);
      console.log('Progreso:', progreso);
      console.log('Curso:', this.curso);
    } else {
      console.log('No se encontró progreso para el usuario con ID:', usuario_id);
    }

  }

  //Generar certificado
  generarCertificado(){

    const certificadoContent=[
      { text: 'Certificado de Curso Completado', style: 'header' },
      {text: '¡FELICIDADES!', style: 'largeText'},
      {text: 'Este certificado se otorga a:',style: 'subHeader'},
      { text:  this.usuario.usuario_nombre + ' ' + this.usuario.usuario_apellido, style: 'userName' },
      {text: 'Por su excelente desempeño en el curso:', style: 'subHeader'},
      { text: this.curso.curso_nombre, style: 'text' }
     
    ];

    const styles = {
      header: {
        fontSize: 22,
        bold: true,
        alignment: 'center',
        color: '#FF8A42',
        margin: [0, 0, 0, 20]
      },
      largeText: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 20],
        color: '#FC72ED'
    },
    subHeader: {
      fontSize: 14,
      bold: true,
      
      color: '#333'
  },
      text: {
        fontSize: 16,
        bold: true,
        color: '#FF8A42',
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },
      userName: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        color: '#FF8A42',
        margin: [0, 0, 0, 15]
      }
    };
    



    
    // Crea el documento del certificado
    const documentDefinition = {
      content: certificadoContent,
      styles: styles
    };

    // Crea el PDF
    
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);

     // Muestra el PDF en una nueva ventana del navegador
     pdfDocGenerator.open();
  }

  navigateTo(destination: string) {
    if (destination === 'curses') {
      this.router.navigate(['/curses']); // Reemplaza '/cursos' con tu ruta real
    } else if (destination === 'perfil') {
      this.router.navigate(['/profile']); // Reemplaza '/perfil' con tu ruta real
    }
  }

  logout() {
    // Realiza aquí el proceso de cierre de sesión (por ejemplo, elimina el token de autenticación, etc.).
    // Luego, redirige al usuario a la página de inicio de sesión.
    this.router.navigate(['/login']); // Reemplaza '/login' con tu ruta real
  }
}
