package com.gmszm.gmszmportfoliomail;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import com.gmszm.gmszmportfoliomail.models.Message;
import com.gmszm.gmszmportfoliomail.services.MessageService;
import com.gmszm.gmszmportfoliomail.services.MessageServiceImpl;

public class MessageServiceImplTests {
    MessageService messageService = new MessageServiceImpl(new JavaMailSenderImpl());

    @Test
    void testCheckMessageValidity() {
        //when message is null
        Message message1 = null;
        assertFalse(messageService.checkMessageValidity(message1));
        //when honeypot is empty
        Message message2 = new Message("John Doe 2", "email2@email.com", "subject2", "this is my message2", "");
        assertTrue(messageService.checkMessageValidity(message2));
        //when honeypot is not empty
        Message message3 = new Message("John Doe 3", "email3@email.com", "subject3", "this is my message3", "honeypot");
        assertFalse(messageService.checkMessageValidity(message3));
        //when honeypot is null
        //when email is too short
        //when email is empty
        //when email is null
        //when email is not a valid email address
        //when subject is empty
        //when subject is too long
        //when subject is null
        //when messageText is empty
        //when messageText is too long
        //when messageText is null
        //when name is empty
        //when name is too long
        //when name is null
    }

    @Test
    void testSendMessage() {
        //when check message validity fails
        Message message = new Message();
    }
}
