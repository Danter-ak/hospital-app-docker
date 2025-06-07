package com.hospital.backend.model;

import com.hospital.backend.model.Patient;
import java.time.LocalDateTime;

public class AppointmentWithPatientDTO {
    private String id;
    private LocalDateTime date;
    private String reason;
    private Patient patient;

    // Constructeurs
    public AppointmentWithPatientDTO() {}

    public AppointmentWithPatientDTO(String id, LocalDateTime date, String reason, Patient patient) {
        this.id = id;
        this.date = date;
        this.reason = reason;
        this.patient = patient;
    }

    // Getters et setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}
