import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
 // { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients', component: PatientListComponent },
  { path: 'patients/add', component: AddPatientComponent },
  { path: 'patients/edit/:id', component: AddPatientComponent },
    { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/add', component: AddAppointmentComponent },
  { path: 'appointments/edit/:id', component: AddAppointmentComponent },
  { path: 'patientprofile', component: PatientProfileComponent },
  { path: 'auth/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
