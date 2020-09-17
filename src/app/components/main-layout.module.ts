import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { AngularMaterialModule } from 'src/app/lib/material/angular-material.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [MainLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    AngularMaterialModule,    
  ],  
  providers: []
})
export class MainLayoutModule { }
