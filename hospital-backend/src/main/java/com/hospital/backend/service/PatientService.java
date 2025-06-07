package com.hospital.backend.service;

import com.hospital.backend.model.Patient;
import com.hospital.backend.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Optional<Patient> getPatientById(String id) {
        return patientRepository.findById(id);
    }

    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public Patient updatePatient(String id, Patient updated) {
        return patientRepository.findById(id).map(p -> {
            p.setNom(updated.getNom());
            p.setPrenom(updated.getPrenom());
            p.setEmail(updated.getEmail());
            p.setAge(updated.getAge());
            return patientRepository.save(p);
        }).orElse(null);
    }

    public boolean deletePatient(String id) {
        if (patientRepository.existsById(id)) {
            patientRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}