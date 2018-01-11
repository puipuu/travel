package com.group.travel.service.impl;


import com.group.travel.dao.TtTravelgroupMapper;
import com.group.travel.pojo.po.TtTravelgroup;
import com.group.travel.pojo.po.TtTravelgroupExample;
import com.group.travel.service.TravelGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * User: Qian ChengHui
 * Date: 2018/1/7
 * Time: 15:41
 * Version:V1.0
 */
@Service
public class TravelGroupServiceImpl implements TravelGroupService{
    @Autowired
    private TtTravelgroupMapper travelgroupDao;

    @Override
    public List<TtTravelgroup> listAllTravelGroup() {
        return travelgroupDao.selectByExample(null);
    }

    @Transactional
    @Override
    public void addTravelGroup(TtTravelgroup travelGroup) {
        travelgroupDao.insert(travelGroup);
    }

    @Override
    public int deleteTravelGroup(List<Long> ids) {
        TtTravelgroupExample example = new TtTravelgroupExample();
        TtTravelgroupExample.Criteria criteria = example.createCriteria();
        criteria.andIdIn(ids);
        return travelgroupDao.deleteByExample(example);
    }

    @Override
    public TtTravelgroup getTravelGroupById(Long travelGroupId) {

        return travelgroupDao.selectByPrimaryKey(travelGroupId);
    }

    @Override
    public void updateTravelGroup(TtTravelgroup travelGroup) {

        travelgroupDao.updateByPrimaryKey(travelGroup);
    }
}
