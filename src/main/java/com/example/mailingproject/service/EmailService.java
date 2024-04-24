package com.example.mailingproject.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


public interface EmailService {
    String sendMail(MultipartFile[] file, String to, String gz , String[] cc, String subject, String body);
}
