import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-patient-list',
  standalone: false,
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getAll().subscribe((data) => {
      this.patients = data;
    });
  }

deletePatient(id: string | undefined): void {
  if (!id) return;

  if (confirm('Are you sure you want to delete this patient?')) {
    this.patientService.delete(id).subscribe({
      next: () => this.loadPatients(),
      error: err => console.error('Error deleting patient', err)
    });
  }
}
}
