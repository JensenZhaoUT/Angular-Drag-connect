import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodes = [
    { id: 1, label: 'Node A', x: 100, y: 100 },
    { id: 2, label: 'Node B', x: 300, y: 200 }
  ];
}
