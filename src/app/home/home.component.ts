import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
// import Swiper core and required modules
import SwiperCore, { Pagination, Swiper, SwiperOptions } from "swiper";
import { SwiperComponent } from 'swiper/angular';
// install Swiper modules
SwiperCore.use([Pagination]);
// Icons
import { faGithub, faTwitter, faCodepen, faJs, faAngular, faHtml5, faSass, faNode} from '@fortawesome/free-brands-svg-icons';
import { faHeart, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons';

 
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
  techBrands: Array<any> = [
    {name: 'HTML5', left:'65%', top:'320px', fs:'25px'},
    {name: 'Javascript', left:'85%', top:'380px', fs:'15px'},
    {name: 'Parallax', left:'75%', top:'40px', fs:'23px'},
    {name: 'Bootstrap', left:'35%', top:'30%', fs:'13px'},
    {name: 'NPM', left:'-60px', top:'200px', fs:'17px'},
    {name: 'Typescript', left:'0', top:'0', fs:'18px'},
    {name: 'Figma', left:'150px', top:'350px', fs:'20px'},
    {name: 'Animate.css', left:'22%', top:'120px', fs:'24px'},
  ];

  // Swiper config
  //pagination = {
  //  clickable: true,
  //  renderBullet: function (index: number, className: string) {
  //    return '<span class="' + className + '">' + (index + 1) + "</span>";
  //  },
  //};
  carouselProjects: Array<any> = [
    { 
      title:'QR code component', 
      image:'assets/images/qr-code-main/guide/desktop-preview.png',
      icon: 'fa-solid fa-qrcode', 
      link:'/challenges/level-1/qr-code-component', 
      level:'1' 
    },
    { 
      title:'Interactive card details', 
      image:'assets/images/interactive-card-details-form/guide/desktop-preview.png',
      icon: 'fa-solid fa-credit-card-front', 
      link:'/challenges/level-2/interactive-card-details-form', 
      level:'2'
    },
    { 
      title:'Blogr landing page', 
      image:'assets/images/blogr-landing-page/guide/desktop-preview.png',
      icon: 'fa-solid fa-credit-card-front', 
      link:'/challenges/level-2/blogr-landing-page', 
      level:'2'
    },
  ];
  
  // Icons
  faGithub = faGithub; faTwitter = faTwitter; faCodepen = faCodepen; faHeart = faHeart;
  faCode = faCode; faJs = faJs; faPaintBrush = faPaintBrush; faAngular = faAngular;
  faHtml5 = faHtml5; faSass = faSass; faNode = faNode;

  constructor(
    private elementRef: ElementRef,
    private router: Router) {  }

  ngAfterViewInit(): void {
    
  }

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



  setSwiperInstance(swiper: Swiper): void {
    setInterval(() => {
      swiper.slideNext(700);
    }, 3000);
  }


}
