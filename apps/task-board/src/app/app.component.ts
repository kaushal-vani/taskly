import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomAlertComponent } from '@taskly/alert-ui';
import { HeaderComponent, FooterComponent, AlertService } from '@taskly/shared';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent, CustomAlertComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('globalAlert') alertRef!: CustomAlertComponent;

  constructor(private alertService: AlertService) {}

  ngAfterViewInit(): void {
    this.alertService.register(this.alertRef);
  }
}