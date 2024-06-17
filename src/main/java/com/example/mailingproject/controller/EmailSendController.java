package com.example.mailingproject.controller;

import com.example.mailingproject.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;


@Controller
@RequestMapping("")
public class EmailSendController {

    private EmailService emailService;

    @Autowired
    public EmailSendController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public String sendMail(@RequestParam(value = "files" , required = false ) MultipartFile[] file,
                           @RequestParam(value = "email" , required = false) String[] checkboxValue, String subject , String body) {
        subject = "Hello";
        body = "GHS";
        emailService.sendMail(file ,checkboxValue , subject , body);
        return "redirect:";
    }

    @GetMapping()
    public String edit(){
        return "page";
    }
}
