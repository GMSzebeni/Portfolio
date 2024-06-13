package com.gmszm.gmszmportfoliomail.exceptions;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class MessageBadRequestException extends Exception {
    private final HttpStatus status;

    public MessageBadRequestException() {
        super("Please check your answers!");
        this.status = HttpStatus.BAD_REQUEST;
    }
}
