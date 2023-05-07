import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
  constructor(public translate: TranslateService){
    translate.addLangs(['vi', 'en']);
    translate.setDefaultLang('vi');
  }
  switchLang(lang: string){
    this.translate.use(lang);
  }
}
