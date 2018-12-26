import { Component } from '@angular/core'
import { UiService } from '@colmena/admin-ui'

@Component({
  selector: 'app-dev-alert',
  template: `
    <ui-card>
      <ui-card-header>Alerts</ui-card-header>
      <ui-card-content>
        <div class="form-group">
          <label for="alertText">Alert Text</label>
          <input id="alertText" type="text" class="form-control" [(ngModel)]="alert.text" />
        </div>

        <button (click)="testAlertSuccess()" class="btn btn-success">Success</button>
        <button (click)="testAlertError()" class="btn btn-danger">Error</button>
        <button (click)="testAlertWarning()" class="btn btn-warning">Warning</button>
        <button (click)="testAlertInfo()" class="btn btn-info">Info</button>
        <button (click)="testAlertQuestion()" class="btn btn-primary">Question</button>
        <button (click)="testAlertPrompt()" class="btn btn-secondary">Prompt</button>
      </ui-card-content>
    </ui-card>
  `,
  styles: [],
})
export class AlertComponent {
  public alert = {
    text: 'This is the Alert Text!',
  }

  constructor(private ui: UiService) {}

  testAlertSuccess() {
    this.ui.alerts.alertSuccess({
      title: 'Success alert',
      text: this.alert.text,
    })
  }

  testAlertWarning() {
    this.ui.alerts.alertWarning({
      title: 'Warning alert',
      text: this.alert.text,
    })
  }

  testAlertError() {
    this.ui.alerts.alertError({
      title: 'Error alert',
      text: this.alert.text,
    })
  }

  testAlertInfo() {
    this.ui.alerts.alertInfo({
      title: 'Info alert',
      text: this.alert.text,
    })
  }

  testAlertQuestion() {
    const successCb = () => this.ui.alerts.alertSuccess({ title: '<i class="fa fa-thumbs-up"></i> Glad you liked it' })
    const closeCb = () => this.ui.alerts.alertError({ title: '<i class="fa fa-thumbs-down"></i> That\'s a pity...' })

    this.ui.alerts.alertQuestion(
      {
        title: 'Do you like these alerts?',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Awesome!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i> Not so much...',
      },
      successCb,
      closeCb
    )
  }

  testAlertPrompt() {
    const successCb = name => this.ui.alerts.alert({ title: `You claim your name is ${name}` })
    const closeCb = () => this.ui.alerts.alert({ title: `You did not tell your name` })

    this.ui.alerts.alertQuestion(
      {
        title: 'What is your name?',
        input: 'text',
      },
      successCb,
      closeCb
    )
  }
}
