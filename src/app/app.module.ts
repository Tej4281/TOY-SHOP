import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FirstComponent } from './first/first.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SixComponent } from './six/six.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { AppMaterialModule } from './app-material/app-material.module';
import { MaterialComponent } from './material/material.component';
// import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FirstComponent,
    ViewComponent,
    SecondComponent,
    ThirdComponent,
    PagenotfoundComponent,
    FourComponent,
    FiveComponent,
    CheckoutComponent,
    SixComponent,
    LoginComponent,
    RegisterComponent,

    // BrowserModule,
    UserComponent,
     HomepageComponent,
     PaymentComponent,


  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule,




  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
