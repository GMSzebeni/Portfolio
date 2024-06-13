package com.gmszm.gmszmportfoliomail.services;

import com.gmszm.gmszmportfoliomail.exceptions.MessageBadRequestException;
import com.gmszm.gmszmportfoliomail.exceptions.PingUnauthorizedException;
import com.gmszm.gmszmportfoliomail.models.Message;

import jakarta.mail.MessagingException;

public interface MessageService {
    String sendMessage(Message message) throws MessagingException, MessageBadRequestException;
    boolean checkMessageValidity(Message message);
    String pinger(String ping) throws PingUnauthorizedException;
}