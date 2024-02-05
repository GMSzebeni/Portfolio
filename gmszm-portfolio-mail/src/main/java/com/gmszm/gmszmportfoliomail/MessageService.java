package com.gmszm.gmszmportfoliomail;

import jakarta.mail.MessagingException;

public interface MessageService {
    String sendMessage(Message message) throws MessagingException, MessageBadRequestException;
    boolean checkMessageValidity(Message message);
}