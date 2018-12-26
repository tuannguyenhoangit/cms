import { Component, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { UiService } from '@colmena/admin-ui'

import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-list',
  template: `
    <div class="card">
      <div class="card-block">
        <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
      </div>
    </div>
  `,
})
export class UserListComponent {
  @ViewChild('grid') private grid

  constructor(
    public service: UsersService,
    public ui: UiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  action(event) {
    switch (event.action) {
      case 'edit':
        return this.router.navigate([event.item.id], { relativeTo: this.route.parent })
      case 'add':
        return this.router.navigate(['create'], { relativeTo: this.route.parent })
      case 'delete':
        const successCb = () =>
          this.service.deleteItem(
            event.item,
            () => this.grid.refreshData(),
            err =>
              this.ui.alerts.notifyError({
                title: 'Error deleting item',
                body: err.message,
              })
          )
        const question = { title: 'Are you sure?', text: 'The action can not be undone.' }
        return this.ui.alerts.alertQuestion(question, successCb, () => ({}))
      default:
        return console.log('Unknown event action', event)
    }
  }
}
