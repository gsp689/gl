import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { GetProjectComponent } from './get-project/get-project.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { PopupProjectComponent } from './popup-project/popup-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    GetProjectComponent,
    PopupProjectComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,MaterialModule,
    ProjectRoutingModule,ReactiveFormsModule
  ],
  entryComponents:[PopupProjectComponent] 
})
export class ProjectModule { }
