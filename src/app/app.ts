import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Home } from './features/home/home';
import { Footer } from './layout/footer/footer';
import { TranslationService } from './core/services/translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('ressutti-portfolio');
  private readonly translation = inject(TranslationService);

  public ngOnInit() {
    this.translation.init();
  }
}
