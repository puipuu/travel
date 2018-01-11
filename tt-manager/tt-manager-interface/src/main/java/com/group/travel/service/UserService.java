package com.group.travel.service;

import com.group.travel.pojo.po.TtUser;

import java.util.List;

public interface UserService {

    List<TtUser> selectUser();

    int addUser(TtUser ttUser);

    int removeuser(List<Long> ids, Integer aa);

    int updateUser(TtUser user);
}
