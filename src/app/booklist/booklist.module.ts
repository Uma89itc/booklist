import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BooklistRoutingModule } from './booklist-routing.module';
import { BooklistComponent } from './booklist.component';
import {MaterialModule} from '../Shared/material/material.module'


@NgModule({
  declarations: [
    BooklistComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BooklistRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class BooklistModule { }
