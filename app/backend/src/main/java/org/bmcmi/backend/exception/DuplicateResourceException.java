package org.bmcmi.backend.exception;

public class DuplicateResourceException extends Exception {
    public DuplicateResourceException(String message) {
        super(message);
    }
}