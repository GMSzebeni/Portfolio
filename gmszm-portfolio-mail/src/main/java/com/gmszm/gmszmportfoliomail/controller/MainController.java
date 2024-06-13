package com.gmszm.gmszmportfoliomail.controller;

import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gmszm.gmszmportfoliomail.exceptions.MessageBadRequestException;
import com.gmszm.gmszmportfoliomail.exceptions.PingUnauthorizedException;
import com.gmszm.gmszmportfoliomail.models.Portion;
import com.gmszm.gmszmportfoliomail.models.Target;
import com.gmszm.gmszmportfoliomail.models.Message;
import com.gmszm.gmszmportfoliomail.models.Validator;
import com.gmszm.gmszmportfoliomail.services.ChCalculatorService;
import com.gmszm.gmszmportfoliomail.services.MessageService;

@CrossOrigin(origins = {"https://www.gmszm.hu", "http://localhost:3000"}, methods = {RequestMethod.POST})
@Controller
public class MainController {
    private final MessageService messageService;
    private final ChCalculatorService chCalculatorService;

    @Autowired
    public MainController(MessageService messageService, ChCalculatorService chCalculatorService) {
        this.messageService = messageService;
        this.chCalculatorService = chCalculatorService;
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

    @PostMapping("/ch-calculator/portion")
    public ResponseEntity<?> calculateChInFood(@RequestBody(required = false) Portion portion) {
        try {
            Double ch = chCalculatorService.calculateChInFood(portion);
            return ResponseEntity.ok().body(ch);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/ch-calculator/target")
    public ResponseEntity<?> calculateGramYouCanEat(@RequestBody(required = false) Target target) {
        try {
            Double gram = chCalculatorService.calculateGramYouCanEat(target);
            return ResponseEntity.ok().body(gram);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}