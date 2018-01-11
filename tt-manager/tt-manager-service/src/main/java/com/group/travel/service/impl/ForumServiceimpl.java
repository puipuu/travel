package com.group.travel.service.impl;

import com.group.travel.dao.TtForumMapper;
import com.group.travel.pojo.po.TtForum;
import com.group.travel.pojo.po.TtForumExample;
import com.group.travel.service.ForumService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ForumServiceimpl implements ForumService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TtForumMapper forumDao;

    @Override
    public TtForum getSceneryById(Long id) {
        return forumDao.selectByPrimaryKey(id);
    }

    @Override
    public List<TtForum> listForm() {
        List<TtForum> list = null;
        try {
            list = forumDao.selectByExample(null);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return list;
    }


    @Override
    public int deleteforum(List<Long> ids) {
        TtForumExample example = new TtForumExample();
        TtForumExample .Criteria criteria = example.createCriteria();
        criteria.andIdIn(ids);
        return  forumDao.deleteByExample(example);
    }



}




