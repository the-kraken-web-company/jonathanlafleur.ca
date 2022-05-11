import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { HomePage } from './pages/home/home.page';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CtaComponent } from './components/cta/cta.component';
import { ContactPage } from './pages/contact/contact.page';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { GithubActivityComponent } from './components/github-activity/github-activity.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ContactPage,
    NavigationComponent,
    LatestPostsComponent,
    GithubActivityComponent,
    EventsComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BlogModule,
    FontAwesomeModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
