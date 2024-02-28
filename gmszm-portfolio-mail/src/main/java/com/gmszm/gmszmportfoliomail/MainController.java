package com.gmszm.gmszmportfoliomail;

import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = {"https://www.gmszm.hu"}, methods = {RequestMethod.POST})
@Controller
public class MainController {
    private final MessageService messageService;

    @Autowired
    public MainController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping("/ping")
    public ResponseEntity<?> pingToKeepAlive(@RequestBody(required = false) Validator validator) {
        try {
            String response = messageService.pinger(validator.getPing());
            return ResponseEntity.ok().body(response);
        } catch (PingUnauthorizedException e) {
            return ResponseEntity.status(e.getStatus()).body(e.getMessage());
        }
    }

    @PostMapping("/send-message")
    public ResponseEntity<?> sendMessage(@RequestBody(required = false) Message message) {
        try {
            String response = messageService.sendMessage(message);
            return ResponseEntity.ok().body(response);
        } catch (MessagingException e) {
            return ResponseEntity.badRequest().body("message: " + e.getMessage() + "\ncause: " + e.getCause());
        } catch (MessageBadRequestException e) {
            return ResponseEntity.status(e.getStatus()).body(e.getMessage());
        }
    }
}