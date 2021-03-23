import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the PdfViewer Module for the PDF Viewer component
import { PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PdfViewerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
