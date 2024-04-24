package com.example.mailingproject.controller;

import com.example.mailingproject.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/mail")
public class EmailSendController {

    private EmailService emailService;

    @Autowired
    public EmailSendController(EmailService emailService) {
        this.emailService = emailService;
    }


    @PostMapping("/send")
    public String sendMail(@RequestParam(value = "file", required = false) MultipartFile[] file, String to,
                           String gz , String[] cc, String subject, String body) {
        return emailService.sendMail(file, to, gz , cc, subject, body);
    }

}
