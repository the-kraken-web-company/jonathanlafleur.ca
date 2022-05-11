import { Component, OnInit } from '@angular/core';
import { faGitAlt, faGithub, faGithubSquare, faLinkedin, faLinkedinIn, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copyrightYear = (new Date()).getFullYear();

  icons = {
    linkedIn: faLinkedin,
    linkedIn2: faLinkedinIn,
    github:faGithub,
    github2:faGitAlt,
    github3:faGithubSquare,
    twitter:faTwitter,
    twitter2:faTwitterSquare
  }


}
