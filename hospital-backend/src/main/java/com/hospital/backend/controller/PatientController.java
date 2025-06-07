package com.hospital.backend.controller;

import com.hospital.backend.model.Patient;
import com.hospital.backend.service.PatientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin("*")
public class PatientController {

    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity <List<Patient>> getAllPatients() {
        List<Patient> patients = service.getAllPatients();
        return ResponseEntity.ok(patients) ;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable String id) {
        return service.getPatientById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        Patient saved = service.createPatient(patient);
       URI location = URI.create("/api/patients/" + saved.getId());
        return ResponseEntity.created(location).body(saved);
    }

//    @PostMapping
//    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
//        return service.createPatient(patient);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable String id, @RequestBody Patient patient) {
        Patient updatedPatient = service.updatePatient(id, patient);
        if (updatedPatient != null) {
            return ResponseEntity.ok(updatedPatient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable String id) {
        boolean deleted = service.deletePatient(id);
        if (!deleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
//    @DeleteMapping("/{id}")
//    public void deletePatient(@PathVariable String id) {
//        service.deletePatient(id);
//    }
}
