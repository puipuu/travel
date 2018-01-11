package com.group.travel.service.impl;

import com.group.travel.dao.TtUserMapper;
import com.group.travel.pojo.po.TtUser;
import com.group.travel.pojo.po.TtUserExample;
import com.group.travel.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TtUserMapper userDao;

    @Override
    public List<TtUser> selectUser() {

        return   userDao.selectByExample(null);
    }

    @Override
    public int addUser(TtUser ttUser) {
        return userDao.insert(ttUser);
    }

    @Override
    public int removeuser(List<Long> ids, Integer aa) {
        int i = 0;
        try{
            TtUser scenery = new TtUser();
            scenery.setStatus(aa);
            TtUserExample example = new TtUserExample();
            TtUserExample.Criteria criteria = example.createCriteria();
            criteria.andIdIn(ids);
            i = userDao.updateByExampleSelective(scenery,example);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return i;
    }

    @Override
    public int updateUser(TtUser user) {
            int i = 0;
            try {
                i = userDao.updateByPrimaryKeySelective(user);
            }catch (Exception e) {
                logger.error(e.getMessage(), e);
                e.printStackTrace();
            }
            return i;

    }


}
