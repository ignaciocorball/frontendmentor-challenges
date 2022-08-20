import { Component, OnInit } from '@angular/core';
import { faHome, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  faHome = faHome;
  faMagnifyingGlass = faMagnifyingGlass;
  faBell = faBell;

  constructor() { 
    // Load background magma style
    this.loadScriptDynamic('https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.4/chroma.min.js'); 
    this.loadScriptDynamic('../../../assets/js/bg-magma.js'); 
  }
  
  ngOnAfterViewInit() {

  }

  ngOnInit(): void {

  }




  cardselect(id : number) {
    const card_front_id = document.querySelector("#"+id)!;
    console.log('Task id: ' + id + ' was selected');
  }

  loadScriptDynamic(cdn:string){
    const script = document.createElement('script');
    script.src = cdn;
    script.type = 'text/javascript';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

}
