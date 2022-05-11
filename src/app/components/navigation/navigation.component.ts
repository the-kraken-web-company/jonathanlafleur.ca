import { Component, OnInit } from '@angular/core';
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  icons = {
    search: faSearch,
    circle: faCircle
  }

  /*typed = new Typed('.typed', {
    
  });*/


}
