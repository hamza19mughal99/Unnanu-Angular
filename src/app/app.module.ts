import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { VisionComponent } from './Pages/vision/vision.component';
import { AboutComponent } from './Pages/about/about.component';
import { CaseStudiesComponent } from './Pages/case-studies/case-studies.component';
import { LatestBlogComponent } from './Pages/latest-blog/latest-blog.component';
import { TestimonialComponent } from './Pages/testimonial/testimonial.component';
import { ServingComponent } from './Pages/serving/serving.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NavbarComponent } from './SharePages/navbar/navbar.component';
import { FooterComponent } from './SharePages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisionComponent,
    AboutComponent,
    CaseStudiesComponent,
    LatestBlogComponent,
    TestimonialComponent,
    ServingComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
