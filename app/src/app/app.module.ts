import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import{FormsModule} from'@angular/forms';
import { AboutComponent } from './about/about.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import{HttpClientModule} from '@angular/common/http';
import { SubTitlePipe } from './pipes/sub-title.pipe';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MahmoudComponent } from './mahmoud/mahmoud.component';
const appRoues:Routes =[
  {path:'',component:LogInComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'article/:id',component:ArticleDetailsComponent},
  {path:'**',component:NotfoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NotfoundComponent,
    SubTitlePipe,
    ArticleDetailsComponent,
    ContactUsComponent,
    MahmoudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoues)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
