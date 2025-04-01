package org.bmcmi.backend.exception;

public class EmailAlreadyExists extends Exception {
    public EmailAlreadyExists() {
        super("Email already exists");
    }
}