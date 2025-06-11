import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  standalone: false,
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit {

  patient: Patient = {
    id: '',
    nom: '',
    prenom: '',
    email: '',
    age: 0
  };

  isEditMode = false;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');

    if (id) {
      this.isEditMode = true;
      this.patientService.get(id).subscribe((data) => {
        this.patient = data;
      });
    } else {
      this.isEditMode = false;
      this.patient = {
        id: '',
        nom: '',
        prenom: '',
        email: '',
        age: 0
      };
    }
  });
}

 onSubmit(): void {
  if (this.isEditMode) {
    this.patientService.update(this.patient.id!, this.patient).subscribe(() => {
      this.router.navigate(['/patients']);
    });
  } else {
    const { id, ...newPatient } = this.patient;
    this.patientService.create(newPatient as Patient).subscribe(() => {
      this.router.navigate(['/patients']);
    });
  }
}
}
