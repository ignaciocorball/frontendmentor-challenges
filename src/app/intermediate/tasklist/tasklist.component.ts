import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ParticlesConfig } from '../../../assets/js/todo-magma-glitched/particles-config';
import { v4 as uuid } from 'uuid';
import { trigger, transition, style, animate, query } from '@angular/animations';

declare let particlesJS: any;

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
  )
]);
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
  animations: [fadeAnimation]
})
export class TasklistComponent implements OnInit {
  
  tasks: Array<any> = [
    {
      id: '449b4892-a471-47b0-aa6b-6ae3be34f947',
      title: 'Pay for rent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: '2020-01-01 12:00:00',
      status: 'pending'
    },
    {
      id: '6367eac1-2376-4a31-8e5c-0dda05d13136',
      title: 'Check emails',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: '2020-01-01 12:00:00',
      status: 'pending'
    },
    {
      id: 'c0bd4313-ac51-4d88-a8d8-33ccc984e7f6',
      title: 'Lunch with Emma',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: '2020-01-01 12:00:00',
      status: 'pending'
    },
    {
      id: '448f13ba-4df1-4d31-9e79-cdaf20abc4ec',
      title: 'Meditation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: '2020-01-01 12:00:00',
      status: 'pending'
    },
    {
      id: 'd1168ede-8433-4828-89f6-c989a8e4407f',
      title: 'Business meeting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: '2020-01-01 12:00:00',
      status: 'pending'
    },
    {
      id: '05c8cd82-acd3-419f-a828-4d2c6be6c29d',
      title: 'Create new template',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: '2020-01-01 12:00:00',
      status: 'completed'
    },
  ];

  constructor() { 
    // Load Dynamic Scripts for component
    this.loadScriptDynamic('https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.4/chroma.min.js');
    this.loadScriptDynamic('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js');
    this.loadScriptDynamic('../../../assets/js/todo-magma-glitched/bg-magma.js');
  }

  ngOnInit(): void {
    this.loadScriptDynamic('../../../assets/js/todo-magma-glitched/functions.js');
  }

  cardselect(id : string) {
    const card_id = document.getElementById(id)!;
    const card_front = (card_id.querySelector(".card__side--front") as HTMLDivElement)!;
    const card_back = (card_id.querySelector(".card__side--back") as HTMLDivElement)!;
    const task = this.tasks.find(element => element.id === id);
    if(task.id == id){
      if(task.status == 'pending'){
        console.log('Task id: ' + id + ' was selected');
        // Flip card
        (card_id.querySelector(".card__side--front") as HTMLDivElement)!.style.transform = "rotateY(180deg)";
        (card_id.querySelector(".card__side--back") as HTMLDivElement)!.style.transform = "rotateY(0deg)";
        // Wait 5 seconds to undo changes
        var counter = 0;
        let interval = window.setInterval( () => {
          if (counter < 92) {
            (card_id.querySelector(".card-timeout") as HTMLDivElement)!.style.width = (++counter) + '%';
            counter++;
          }
          else {
            // Change status of task
            card_front.style.transform = "rotateY(0deg)";
            card_back.style.transform = "rotateY(-180deg)";
            card_front.querySelector('.task-title')!.className = "task-title title-tashed";
            card_front.querySelector('.fa-circle-check')!.className = "fas fa-circle-check chk-checked";
            task.status = 'completed';
            this.tasks.sort((a, b) => b.status.localeCompare(a.status));
            clearInterval(interval);
          }
        }, 55);
      }else{
        console.log('Task is completed'); 
      }
    }else{
      console.log('Task not found');
    }
  }
  // Dashboard button click
  goDashboard(){
    document.querySelector(".view-1")!.classList.remove("d-block");
    document.querySelector(".view-1")!.classList.add("d-none");
    document.getElementById("view-1")!.style.opacity = "0";
    document.querySelector(".view-0")!.classList.remove("d-none");
    document.querySelector(".view-0")!.classList.add("d-block");
    this.invokeParticles();
  }
  goHome(){
    document.querySelector(".view-0")!.classList.remove("d-block");
    document.querySelector(".view-0")!.classList.add("d-none");
    document.querySelector(".view-1")!.classList.add("d-block");
    document.querySelector(".view-1")!.classList.remove("d-none");
  }
  loadScriptDynamic(cdn:string){
    const script = document.createElement('script');
    script.src = cdn;
    script.type = 'text/javascript';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() { });
  }

}
