import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NickXoLogicService } from "../nick-xo-logic.service"

@Component({
  selector: 'app-nick-xo-game-canvas',
  templateUrl: './nick-xo-game-canvas.component.html',
  styleUrls: ['./nick-xo-game-canvas.component.css']
})
export class NickXoGameCanvasComponent implements OnInit {

  constructor(public xoLogicsService: NickXoLogicService) { }

  @ViewChild("q", { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  ssdads:boolean;

  random(items: any): any {
    return items[Math.floor(Math.random() * items.length)];
  }

  animation(w: number, h: number, p: any, hex: string[]): void {
    this.ctx.fillStyle = "rgba(0,0,0,.05)";
    this.ctx.fillRect(0, 0, w, h);
    this.ctx.fillStyle = "#0f0";
    p.map((v, i) => {
      this.ctx.fillText(this.random(hex), i * 10, v);
      p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.font = "10px serif";
    /*   const s = window.screen;
       const w = this.s.width;
       const h = this.s.height;
   */
    const w = this.canvas.nativeElement.width;
    const h = this.canvas.nativeElement.height;
    const p = Array(Math.floor(w / 10) + 1).fill(0);

    const hex = "01".split("");
    setInterval(() => this.animation(w, h, p, hex), 1000 / 30);

  }

}
