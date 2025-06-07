package com.hospital.backend.service;

import com.hospital.backend.model.Appointment;
import com.hospital.backend.model.AppointmentWithPatientDTO;
import com.hospital.backend.model.Patient;
import com.hospital.backend.repository.AppointmentRepository;
import com.hospital.backend.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepository repository;
    private  PatientRepository prepository;

    public AppointmentService(AppointmentRepository repository) {
        this.repository = repository;
    }

    public Appointment create(Appointment appointment) {
        return repository.save(appointment);
    }

    public List<Appointment> getAll() {
        return repository.findAll();
    }

    public Optional<Appointment> getById(String id) {
        return repository.findById(id);
    }

    public List<Appointment> getByPatientId(String patientId) {
        return repository.findByPatientId(patientId);
    }

    public Appointment update(String id, Appointment updated) {
        return repository.findById(id).map(existing -> {
            existing.setDate(updated.getDate());
            existing.setReason(updated.getReason());
            existing.setPatientId(updated.getPatientId());
            return repository.save(existing);
        }).orElse(null);
    }

    public boolean delete(String id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }


    public AppointmentWithPatientDTO getAppointmentWithPatient(String appointmentId) {
        Optional<Appointment> appointmentOpt = repository.findById(appointmentId);
        if (appointmentOpt.isPresent()) {
            Appointment appointment = appointmentOpt.get();
            Optional<Patient> patientOpt = prepository.findById(appointment.getPatientId());
            if (patientOpt.isPresent()) {
                return new AppointmentWithPatientDTO(
                        appointment.getId(),
                        appointment.getDate(),
                        appointment.getReason(),
                        patientOpt.get()
                );
            }
        }
        return null;
    }

}
