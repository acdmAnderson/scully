import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { AngularMaterialModule } from 'src/app/lib/material/angular-material.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    AngularMaterialModule,    
  ],
  providers: []
})
export class MainLayoutModule { }
