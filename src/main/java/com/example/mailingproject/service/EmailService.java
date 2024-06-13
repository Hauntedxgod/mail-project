package com.example.mailingproject.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;


public interface EmailService {
    String sendMail(MultipartFile[] file, String[] checkBox, String subject, String body);
}
