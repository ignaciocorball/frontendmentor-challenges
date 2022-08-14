import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qr-code-component',
  templateUrl: './qr-code-component.component.html',
  styleUrls: ['./qr-code-component.component.scss']
})
export class QrCodeComponentComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.transition = 'background-color 500ms linear, color 500ms linear';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'hsl(212, 45%, 89%)';
  }

  toggleBG(id:number){

    switch (id) {
      case 1:
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'hsl(212, 45%, 89%)';
        document.getElementById('attribution')!.style.color = '#1f3251';
        break;
      case 0:
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1F2341';
        document.getElementById('attribution')!.style.color = '#fff';
        break;
    }

  }


}
