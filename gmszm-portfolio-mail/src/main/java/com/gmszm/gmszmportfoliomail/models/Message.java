package com.gmszm.gmszmportfoliomail.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    private String name;
    private String email;
    private String subject;
    private String messageText;
    private String honeypot;
}