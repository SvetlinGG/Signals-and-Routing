import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'signals';

  counter = signal(0);

  ngOnInit(): void {
    console.log(`counter: ${this.counter()}`);
    
  }

  increment(){

    const value = this.counter() + 1;
    this.counter.set(value);
    
    
    

  }
}
