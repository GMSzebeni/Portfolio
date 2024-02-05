package com.gmszm.gmszmportfoliomail;

import jakarta.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {
    private JavaMailSender javaMailSender;
    @Value("${email.address}")
    private String to;

    @Autowired
    public MessageServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public String sendMessage(Message message) throws MessagingException, MessageBadRequestException {
        if (checkMessageValidity(message)) {
            SimpleMailMessage simpleMail = new SimpleMailMessage();
            simpleMail.setFrom(message.getEmail());
            simpleMail.setSubject(message.getSubject());
            simpleMail.setTo(to);
            simpleMail.setText("Sender's name: " + message.getName() + "\nSender's email: " + message.getEmail() + "\nMessage:\n" + message.getMessageText());
            javaMailSender.send(simpleMail);
            return "Message has been sent.";
        } else {
            throw new MessageBadRequestException();
        }
    }

    public boolean checkMessageValidity(Message message) {
        return  message != null
                && (message.getHoneypot() == "" || message.getHoneypot() == null) 
                && (message.getEmail().length() != 0 && message.getEmail().length() < 101 && message.getEmail() != null)
                && message.getEmail().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
                && (message.getName().length() != 0 && message.getName().length() < 101 && message.getName() != null)
                && (message.getSubject().length() != 0 && message.getSubject().length() < 101 && message.getSubject() != null)
                && (message.getMessageText().length() != 0 && message.getMessageText().length() < 601 && message.getMessageText() != null);
    }
}
