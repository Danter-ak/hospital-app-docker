import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    AddPatientComponent,
    AppointmentListComponent,
    AddAppointmentComponent,
    HomePageComponent,
    PatientProfileComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
