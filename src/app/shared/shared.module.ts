import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';


@NgModule({
    imports: [
      CommonModule,RouterModule,MaterialModule
    ],
    declarations: [
      HeaderComponent,
      FooterComponent,

    ],
    exports: [
      CommonModule,
      HeaderComponent,
      FooterComponent,
    ]
  })
  
  export class SharedModule {
  }