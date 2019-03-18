import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Mission10xrComponent } from './components/mission10xr/mission10xr.component';



const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'aboutus',component:AboutusComponent},
{path:'services',component:ServicesComponent},
{path:'events',component:EventsComponent},
{path:'gallery',component:GalleryComponent},
{path:'contactus',component:ContactusComponent},
{path:'mission10xr',component:Mission10xrComponent},
{path:'', redirectTo:'/home' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
