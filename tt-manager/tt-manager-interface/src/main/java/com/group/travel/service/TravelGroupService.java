package com.group.travel.service;

import com.group.travel.pojo.po.TtTravelgroup;

import java.util.List;

/**
 * User: Qian ChengHui
 * Date: 2018/1/7
 * Time: 15:36
 * Version:V1.0
 */
public interface TravelGroupService {
    List<TtTravelgroup> listAllTravelGroup();

    void addTravelGroup(TtTravelgroup travelGroup);

    int deleteTravelGroup(List<Long> ids);

    TtTravelgroup getTravelGroupById(Long travelGroupId);

    void updateTravelGroup(TtTravelgroup travelGroup);
}
