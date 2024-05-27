import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './Material/Material.module';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  title = 'angular-material';
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngAfterContentInit(): void {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close()
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open()
        }
      }
    })
  }
}
