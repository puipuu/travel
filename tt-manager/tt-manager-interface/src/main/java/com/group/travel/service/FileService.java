package com.group.travel.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.Map;


/**
 * User: Shinelon
 * Date: 2018/1/17
 * Time: 21:33
 * Version:V1.0
 */
public interface FileService {
    Map<String,Object> uploadImages(MultipartFile myfile);
}
