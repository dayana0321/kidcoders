import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'curses',
    loadChildren: () => import('./pages/curses/curses.module').then( m => m.CursesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'lessonscourse1',
    loadChildren: () => import('./pages/lessonscourse1/lessonscourse1.module').then( m => m.Lessonscourse1PageModule)
  },
  {
    path: 'lessonscourse2',
    loadChildren: () => import('./pages/lessonscourse2/lessonscourse2.module').then( m => m.Lessonscourse2PageModule)
  },
  {
    path: 'lessonscourse3',
    loadChildren: () => import('./pages/lessonscourse3/lessonscourse3.module').then( m => m.Lessonscourse3PageModule)
  },
  {
    path: 'lessonscourse4',
    loadChildren: () => import('./pages/lessonscourse4/lessonscourse4.module').then( m => m.Lessonscourse4PageModule)
  },
  {
    path: 'contentlesson1',
    loadChildren: () => import('./pages/contentlesson1/contentlesson1.module').then( m => m.Contentlesson1PageModule)
  },
  {
    path: 'contentlesson2',
    loadChildren: () => import('./pages/contentlesson2/contentlesson2.module').then( m => m.Contentlesson2PageModule)
  },
  {
    path: 'contentlesson3',
    loadChildren: () => import('./pages/contentlesson3/contentlesson3.module').then( m => m.Contentlesson3PageModule)
  },
  {
    path: 'contentlesson4',
    loadChildren: () => import('./pages/contentlesson4/contentlesson4.module').then( m => m.Contentlesson4PageModule)
  },
  {
    path: 'contentlesson5',
    loadChildren: () => import('./pages/contentlesson5/contentlesson5.module').then( m => m.Contentlesson5PageModule)
  },
  {
    path: 'contentlesson6',
    loadChildren: () => import('./pages/contentlesson6/contentlesson6.module').then( m => m.Contentlesson6PageModule)
  },
  {
    path: 'contentlesson7',
    loadChildren: () => import('./pages/contentlesson7/contentlesson7.module').then( m => m.Contentlesson7PageModule)
  },
  {
    path: 'contentlesson8',
    loadChildren: () => import('./pages/contentlesson8/contentlesson8.module').then( m => m.Contentlesson8PageModule)
  },
  {
    path: 'contentlesson9',
    loadChildren: () => import('./pages/contentlesson9/contentlesson9.module').then( m => m.Contentlesson9PageModule)
  },
  {
    path: 'contentlesson10',
    loadChildren: () => import('./pages/contentlesson10/contentlesson10.module').then( m => m.Contentlesson10PageModule)
  },
  {
    path: 'contentlesson11',
    loadChildren: () => import('./pages/contentlesson11/contentlesson11.module').then( m => m.Contentlesson11PageModule)
  },
  {
    path: 'contentlesson12',
    loadChildren: () => import('./pages/contentlesson12/contentlesson12.module').then( m => m.Contentlesson12PageModule)
  },
  {
    path: 'contentlesson13',
    loadChildren: () => import('./pages/contentlesson13/contentlesson13.module').then( m => m.Contentlesson13PageModule)
  },
  {
    path: 'contentlesson14',
    loadChildren: () => import('./pages/contentlesson14/contentlesson14.module').then( m => m.Contentlesson14PageModule)
  },
  {
    path: 'contentlesson15',
    loadChildren: () => import('./pages/contentlesson15/contentlesson15.module').then( m => m.Contentlesson15PageModule)
  },
  {
    path: 'contentlesson16',
    loadChildren: () => import('./pages/contentlesson16/contentlesson16.module').then( m => m.Contentlesson16PageModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./pages/test1/test1.module').then( m => m.Test1PageModule)
  },
  {
    path: 'test2',
    loadChildren: () => import('./pages/test2/test2.module').then( m => m.Test2PageModule)
  },
  {
    path: 'test3',
    loadChildren: () => import('./pages/test3/test3.module').then( m => m.Test3PageModule)
  },
  {
    path: 'test4',
    loadChildren: () => import('./pages/test4/test4.module').then( m => m.Test4PageModule)
  },
  {
    path:'content/course1/:id',
    loadChildren:() => import('./pages/lessonscourse1/lessonscourse1.module').then(m => m.Lessonscourse1PageModule)
  },
  {
    path:'content/lesson1/:id',
    loadChildren:() => import('./pages/contentlesson1/contentlesson1.module').then(m => m.Contentlesson1PageModule )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
