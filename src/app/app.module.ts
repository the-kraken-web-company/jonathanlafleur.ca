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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

