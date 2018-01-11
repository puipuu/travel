package com.group.travel.service;

import com.group.travel.pojo.po.TtForum;

import java.util.List;

public interface ForumService {


    List<TtForum> listForm();


    int deleteforum(List<Long> ids);


    TtForum getSceneryById(Long id);
}
