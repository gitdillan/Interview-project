import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule,MatInputModule,MatButtonModule,MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatCardModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InnerComponent } from './layout/inner/inner.component';
import { OuterComponent } from './layout/outer/outer.component';
import { HeaderComponent } from './layout/inner/header/header.component';
import { FooterComponent } from './layout/inner/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BotComponent } from './pages/bot/bot.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerComponent,
    OuterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LandingComponent,
    BotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [
 {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2600, verticalPosition: 'top'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
