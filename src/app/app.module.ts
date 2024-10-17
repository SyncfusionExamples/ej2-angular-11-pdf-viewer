import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the PdfViewer Module for the PDF Viewer component
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
