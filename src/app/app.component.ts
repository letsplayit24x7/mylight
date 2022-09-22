import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';
   ngOnInit(): void {
    document.querySelector('circle').addEventListener('click', (e: any) => {
      const randomColour = Math.round(Math.random() * 0xffffff);
      e.target.style.stroke = `#${randomColour.toString(16).padStart(6, '0')}`;
    });
  }
}
