// Systen imports
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);
// Icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @ViewChild('skillsetsSection') private myScrollContainer!: ElementRef;
  
  // Variables
  titlesArray = ["Ignacio Corball", "Arcturian.dev"];
  labels: Array<any> = [
    {name: 'HTML5', left:'65%', top:'320px', fs:'25px'},
    {name: 'Javascript', left:'85%', top:'380px', fs:'15px'},
    {name: 'Sass', left:'75%', top:'40px', fs:'23px'},
    {name: 'Angular', left:'35%', top:'30%', fs:'13px'},
    {name: 'NPM', left:'-60px', top:'200px', fs:'17px'},
    {name: 'Typescript', left:'0', top:'0', fs:'18px'},
    {name: 'Figma', left:'150px', top:'350px', fs:'20px'},
    {name: 'Animate.css', left:'22%', top:'120px', fs:'24px'},
  ];

  limitedProjects: Array<any> = [
    { tittle:'QR code component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
    { tittle:'Interactive card details', image:'assets/images/interactive-card-details-form/guide/desktop-preview.jpg', link:'/challenges/level-2/interactive-card-details-form', level:'2' },
    { tittle:'QR Code Component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
    { tittle:'QR Code Component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
    { tittle:'QR Code Component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
    { tittle:'QR Code Component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
    { tittle:'QR Code Component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
    { tittle:'QR Code Component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
    { tittle:'QR Code Component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
    { tittle:'QR Code Component', image:'assets/images/qr-code-main/guide/desktop-preview.jpg', link:'/challenges/level-1/qr-code-component', level:'1' },
  ];
  
  // Icons
  faGithub = faGithub;
  faTwitter = faTwitter;
  faCodepen = faCodepen;
  faHeart = faHeart;
  faCode = faCode;
  faJs = faJs;
  faPaintBrush = faPaintBrush;
  faAngular = faAngular;
  faHtml5 = faHtml5;
  faSass = faSass;
  faNode = faNode;

  constructor(
    private elementRef: ElementRef,
    public router: Router) { }

  ngOnInit(): void {

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(248, 248, 248)';
    
    this.typeMachine();

  }

  redirectTo(link: string): void {
    this.router.navigate(['/home'], { fragment: link })
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  typeMachine(): void {
    const typedText = document.querySelector(".typed-text")!;
    const cursor = document.querySelector(".machine-line")!;
    
    let textArrayIndex = 0;
    let charIndex = 0;
    
    const erase = () => {
      if (charIndex > 0) {
        cursor.classList.remove('blink');
        typedText.textContent = this.titlesArray[textArrayIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 80);
      } else {
        cursor.classList.add('blink');
        textArrayIndex++;
        if (textArrayIndex > this.titlesArray.length - 1) {
          textArrayIndex = 0;
        }
        setTimeout(type, 1000);
      }
    }
    const type = () => {
      if (charIndex <= this.titlesArray[textArrayIndex].length - 1) {
        cursor.classList.remove('blink');
        typedText.textContent += this.titlesArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
      } else {
        cursor.classList.add('blink');
        setTimeout(erase, 1000);
      }
    }
    document.addEventListener("DOMContentLoaded", () => {
      type();
    });
  }
  toggleTheme(): void {

  }
}
