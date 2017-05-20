import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNgTagsComponent } from './simple-ng-tags/simple-ng-tags.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SimpleNgTagsComponent
  ],
  exports: [
    SimpleNgTagsComponent
  ]
})
export class SimpleNgTagsModule {
}
