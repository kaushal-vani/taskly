import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-ui-preferences',
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-preferences.component.html',
  styleUrl: './ui-preferences.component.scss',
})
export class UiPreferencesComponent {
  defaultView: 'calendar' | 'todo' | 'kanban' = 'calendar';

selectedView = 'calendar';

onDefaultViewChange(value: string) {
  console.log('Selected default view:', value);
}
}