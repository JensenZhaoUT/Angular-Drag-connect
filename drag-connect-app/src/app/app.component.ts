import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodes = [
    { id: 1, label: 'Node A', x: 100, y: 100 },
    { id: 2, label: 'Node B', x: 300, y: 200 }
  ];

  connections = [
    { from: 1, to: 2 }
  ];

  nextId = 3;
  selectedNode: any = null;

  draggingNode: any = null;
  offsetX: number = 0;
  offsetY: number = 0;

  startDrag(event: MouseEvent, node: any) {
    this.draggingNode = node;
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
  }

  onDrag(event: MouseEvent) {
    if (this.draggingNode) {
      this.draggingNode.x = event.clientX - this.offsetX;
      this.draggingNode.y = event.clientY - this.offsetY;
    }
  }

  endDrag() {
    this.draggingNode = null;
  }

  addNode(event: MouseEvent) {
    const newNode = {
      id: this.nextId++,
      label: 'Node ' + String.fromCharCode(64 + this.nextId),
      x: event.clientX - 50,
      y: event.clientY - 25
    };
    this.nodes.push(newNode);
  }

  connectNode(node: any) {
    if (!this.selectedNode) {
      this.selectedNode = node;
    } else {
      if (this.selectedNode.id !== node.id) {
        this.connections.push({ from: this.selectedNode.id, to: node.id });
      }
      this.selectedNode = null;
    }
  }

  deleteNode(node: any) {
    this.nodes = this.nodes.filter(n => n.id !== node.id);
    this.connections = this.connections.filter(conn => conn.from !== node.id && conn.to !== node.id);
    if (this.selectedNode?.id === node.id) {
      this.selectedNode = null;
    }
  }

  deleteConnection(conn: any) {
    this.connections = this.connections.filter(c => c !== conn);
  }

  getNodeCenter(id: number) {
    const node = this.nodes.find(n => n.id === id);
    return { x: node!.x + 50, y: node!.y + 25 };
  }
}