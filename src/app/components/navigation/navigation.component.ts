import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
  }

  setLanguage() {
    let otherLang = this.translate.currentLang == 'en' ? 'fr' : 'en';
    this.translate.use(otherLang);
  }

  icons = {
    search: faSearch,
    circle: faCircle
  }

}