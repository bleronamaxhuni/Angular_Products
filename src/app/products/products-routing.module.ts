import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'products',component:HomeComponent},
  {path:'products/create',component:CreateComponent},
  {path:'products/edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
