import { Routes } from '@angular/router';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { InternshipComponent } from './internship/internship.component';
import { RecommendedInternComponent } from './recommended-intern/recommended-intern.component';
import { TopInternshipComponent } from './top-internship/top-internship.component';
import { FreeInternshipComponent } from './free-internship/free-internship.component';
import { RealtimeInternshipComponent } from './realtime-internship/realtime-internship.component';
import { SearchInternshipComponent } from './search-internship/search-internship.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:''
    },
    {
      title:"STACK-QUEUE | Salem",
      path:'',
      component:IndexpageComponent
    },
    {
      title:"STACK-QUEUE | Login",
      path:'login',
      component:LoginpageComponent
    },
    {
      title:"STACK-QUEUE | Signup",
      path:'signup',
      component:SignupComponent
    },
  {
      title:"STACK-QUEUE | Recover Password",
      path:'forgotpassword',
      component:ForgotpasswordComponent
  },
  {
    title:"STACK-QUEUE | Internship in Salem",
    path:'internship',
    component:InternshipComponent,
    children:[
      {
        path:'',
        redirectTo:"recommended",
        pathMatch:'full'
      },
      {
        path:"recommended",
        component:RecommendedInternComponent
      },
      {
        path:"toprated",
        component:TopInternshipComponent
      },
      {
        path:"freeintern",
        component:FreeInternshipComponent
      },
      {
        path:"realtimeintern",
        component:RealtimeInternshipComponent
      },
      {
        path:"searchresults",
        component:SearchInternshipComponent
      }
    ]
  }
];
