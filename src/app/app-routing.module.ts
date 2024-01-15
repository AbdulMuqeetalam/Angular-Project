import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { MenupageComponent } from './Pages/menuPage/menupage.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'menu', component: MenuComponent},
  {path : 'menu/:id', component: MenupageComponent},
  {path: 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
