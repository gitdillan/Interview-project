import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterComponent } from './layout/outer/outer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { InnerComponent } from './layout/inner/inner.component';
import { BotComponent } from './pages/bot/bot.component';


const routes: Routes = [
  {path:'',component:OuterComponent,

  children:[

    {path:'', component:LandingComponent},
    {path:'login', component:LoginComponent},
  ]
},

{path:'user', component:InnerComponent,

children:[

  {path:'bot', component:BotComponent}
]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
