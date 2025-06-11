import { Component } from '@angular/core';
import { Appointment } from '../../models/appointement';
import { AppointmentService } from '../../service/appointment.service';
import { PatientService } from '../../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-add-appointment',
  standalone: false,
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {
  appointment: any = {
    date: '',
    time: '',
    description: '',
    patientId: ''
  };

  patients: Patient[] = [];
  isEditMode = false;

  constructor(
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.patientService.getAll().subscribe(p => this.patients = p);

   this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id) {
      this.isEditMode = true;
      this.appointmentService.get(id).subscribe(data => {
        const [datePart, timePartWithSec] = data.date.split('T');
        const timePart = timePartWithSec?.substring(0, 5); // "HH:mm"

        this.appointment = {
          id: data.id,
          date: datePart,
          time: timePart,
          reason: data.reason,
          patientId: data.patientId
        };
      });
    }
  });
  }

onSubmit(): void {

  const combinedDateTime = `${this.appointment.date}T${this.appointment.time}`;
  const appointmentToSend = {
    id: this.appointment.id,
    date: combinedDateTime,
    reason: this.appointment.reason,
    patientId: this.appointment.patientId
  };

  if (this.isEditMode) {
    this.appointmentService.update(this.appointment.id!, appointmentToSend).subscribe(() => {
      this.router.navigate(['/appointments']);
    });
  } else {
    this.appointmentService.create(appointmentToSend).subscribe(() => {
      this.router.navigate(['/appointments']);
    });
  }
}

}
