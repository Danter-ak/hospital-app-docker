package com.hospital.backend.controller;

import com.hospital.backend.model.Appointment;
import com.hospital.backend.model.AppointmentWithPatientDTO;
import com.hospital.backend.service.AppointmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Appointment> create(@RequestBody Appointment appointment) {
        Appointment saved = service.create(appointment);
        URI location = URI.create("/api/appointments/" + saved.getId());
        return ResponseEntity.created(location).body(saved);
    }

    @GetMapping
    public ResponseEntity<List<Appointment>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getById(@PathVariable String id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Appointment>> getByPatientId(@PathVariable String patientId) {
        return ResponseEntity.ok(service.getByPatientId(patientId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Appointment> update(@PathVariable String id, @RequestBody Appointment appointment) {
        Appointment updated = service.update(id, appointment);
        if (updated == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        boolean deleted = service.delete(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}/with-patient")
    public ResponseEntity<AppointmentWithPatientDTO> getAppointmentWithPatient(@PathVariable String id) {
        AppointmentWithPatientDTO dto = service.getAppointmentWithPatient(id);
        if (dto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dto);
    }

}
