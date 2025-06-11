import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Appointment } from '../../models/appointement';
import { PatientService } from '../../service/patient.service';
import { AppointmentService } from '../../service/appointment.service';

@Component({
  selector: 'app-patient-profile',
  standalone: false,
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent implements OnInit{

  searchTerm: string = '';
  allPatients: Patient[] = [];
  filteredPatients: Patient[] = [];
  appointmentsByPatient: { [key: string]: Appointment[] } = {};

  constructor(private patientService: PatientService, private appointmentService: AppointmentService) {}


  ngOnInit(): void {
    this.patientService.getAll().subscribe(patients => {
      this.allPatients = patients;
    });

    this.appointmentService.getAll().subscribe(appointments => {
      for (let appt of appointments) {
        if (!this.appointmentsByPatient[appt.patientId]) {
          this.appointmentsByPatient[appt.patientId] = [];
        }
        this.appointmentsByPatient[appt.patientId].push(appt);
      }
    });
  }

  searchPatients(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredPatients = this.allPatients.filter(
      p => p.nom.toLowerCase().includes(term) || p.prenom.toLowerCase().includes(term)
    );
  }

}
