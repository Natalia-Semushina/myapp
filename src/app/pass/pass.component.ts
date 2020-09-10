import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass',
  template: `
                <div class="second_task">
                  <h1 fxLayoutAlign="center center"> Задача_2</h1>
                    <mat-form-field>
                        <mat-label>\
                            Введите пароль:
                        </mat-label>
                        <input matInput placeholder="password" [type]="isHide ? 'password' : 'text'" id="password">
                    </mat-form-field>
                    <mat-checkbox [(ngModel)]="isHide" id="isHide" required name="isHide">Скрыть пароль</mat-checkbox>
                </div>`,
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit {
  isHide = true;
  constructor() { }

  ngOnInit(): void {
  }

}
