import { Component } from '@angular/core';
import { Appointment } from '../../models/appointement';
import { Patient } from '../../models/patient';
import { AppointmentService } from '../../service/appointment.service';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

   appointments: Appointment[] = [];
  patients: { [key: string]: Patient } = {};

  constructor(
    private appointmentService: AppointmentService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
    this.patientService.getAll().subscribe(data => {
      data.forEach(p => this.patients[p.id!] = p);
    });
  }

  loadAppointments(): void {
    this.appointmentService.getAll().subscribe((data) => {
       console.log('Appointments received:', data);
      this.appointments = data;
    });
  }

  deleteAppointment(id: string | undefined): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentService.delete(id).subscribe(() => this.loadAppointments());
    }
  }

  getPatientName(id: string): string {
    return this.patients[id]?.nom + ' ' + this.patients[id]?.prenom || 'Unknown';
  }

}
