import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer" [serviceUrl]='service' [documentPath]='document' style="height:640px;display:block"></ejs-pdfviewer>
</div>`,
providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService, AnnotationService, TextSearchService, TextSelectionService,PrintService] 
})
export class AppComponent implements OnInit {
  title = 'angular11PDF-Viewer';
  public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
    public document = 'PDF_Succinctly.pdf';
    ngOnInit(): void {
    }
}
