import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ViewComponent } from './view/view.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SixComponent } from './six/six.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [


    {
      path:'',component:HomeComponent
    },
    {
      path:'home',component:HomeComponent
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'aboutus',component:AboutusComponent
    },
    {
      path:'contactus',component:ContactusComponent
    },
    {
      path:'first',component:FirstComponent
      // children:[
      //   {
      //     path:'firstchild',component:FirstchildComponent
      //   },
      // ]
    },
    {
      path:'view/:id',
      component:ViewComponent
    },
    {
      path:'checkout/:id',
      component:CheckoutComponent
    },
    {
      path:'second',component:SecondComponent
    },

    {
      path:'third',component:ThirdComponent
    },
    {
      path:'four',component:FourComponent
    },
    {
      path:'five',component:FiveComponent
    },
    {
      path:'six',component:SixComponent
    },
    {
      path:'payment',component:PaymentComponent
    },
    {
      path:'register',component:RegisterComponent
    },

    { path: '**', pathMatch: 'full',
    component: PagenotfoundComponent },

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
