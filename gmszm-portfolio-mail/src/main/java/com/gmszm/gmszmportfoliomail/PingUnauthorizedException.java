package com.gmszm.gmszmportfoliomail;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class PingUnauthorizedException extends Exception {
    private final HttpStatus status;

    public PingUnauthorizedException() {
        super("Nope, you are not allowed to ping this!");
        this.status = HttpStatus.UNAUTHORIZED;
    }
}