import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-content-dashboard',
  template: `
    <div class="card">
      <div class="card-header">Content</div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-4" *ngFor="let widget of widgets">
            <ui-dashboard-icon
              [routerLink]="widget.link"
              [count]="widget.count"
              [icon]="widget.icon"
              [label]="widget.label"
              [type]="widget.type">
            </ui-dashboard-icon>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    ui-card {
      cursor: pointer;
    }
    ui-card h4 {
      margin: 0;
    }
  `,
  ],
})
export class ContentDashboardComponent {
  public widgets = []

  constructor(private store: Store<any>) {
    this.store.select('app').subscribe((res: any) => (this.widgets = res.contentDashboard))
  }
}
