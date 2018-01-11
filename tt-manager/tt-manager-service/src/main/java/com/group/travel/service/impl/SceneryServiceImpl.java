package com.group.travel.service.impl;

import com.group.travel.dao.TtSceneryDesMapper;
import com.group.travel.dao.TtSceneryMapper;
import com.group.travel.pojo.po.TtScenery;
import com.group.travel.pojo.po.TtSceneryExample;
import com.group.travel.service.SceneryService;
import com.group.travel.utils.IDUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SceneryServiceImpl implements SceneryService{

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TtSceneryMapper sceneryDao;

    @Autowired
    private TtSceneryDesMapper sceneryDesDao;

    @Override
    public TtScenery getSceneryById(Long id) {

       return sceneryDao.selectByPrimaryKey(id);
    }


    @Override
    public List<TtScenery> listScenery() {

        List<TtScenery> list = null;
        try {
            list = sceneryDao.selectByExample(null);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public int addScenery(TtScenery scenery) {
        int i = 0;
        try{

            Long id = IDUtils.getItemId();
            scenery.setId(id);
            scenery.setStatus(1);
            i = sceneryDao.insert(scenery);

        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

//    @Override
//    public int addScenery(TtScenery scenery,String scenertContent) {
//        int i = 0;
//        try{
//            //存放两张表
//            Long id = IDUtils.getItemId();
//            scenery.setId(id);
//            scenery.setStatus(1);
//            i = sceneryDao.insert(scenery);
//
//            TtSceneryDes ttSceneryDes = new TtSceneryDes();
//            ttSceneryDes.setId(id);
//            ttSceneryDes.setScenrtycontent(scenertContent);
//            ttSceneryDes.setCreated(new Date());
//            ttSceneryDes.setUpdated(new Date());
//            i += sceneryDesDao.insert(ttSceneryDes);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//            e.printStackTrace();
//        }
//        return i;
//    }

    @Override
    public int deleteScenery(List<Long> ids) {

        int i = 0;
        try{
            TtScenery scenery = new TtScenery();
            scenery.setStatus(3);
            TtSceneryExample example = new TtSceneryExample();
            TtSceneryExample.Criteria criteria = example.createCriteria();
            criteria.andIdIn(ids);
            i = sceneryDao.updateByExampleSelective(scenery,example);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }

        return i;
    }

    @Override
    public int updateScenery(TtScenery scenery) {
        int i = 0;
        try{
            TtSceneryExample sceneryExample = new TtSceneryExample();
            TtSceneryExample.Criteria criteria = sceneryExample.createCriteria();
            criteria.andIdEqualTo(scenery.getId());
            i = sceneryDao.updateByExampleSelective(scenery,sceneryExample);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }

        return i;
    }

    @Override
    public int batchUpdate(List<Long> ids, Integer aa) {
        int i = 0;
        try{
            TtScenery scenery = new TtScenery();
            scenery.setStatus(aa);
            TtSceneryExample example = new TtSceneryExample();
            TtSceneryExample.Criteria criteria = example.createCriteria();
            criteria.andIdIn(ids);
            i = sceneryDao.updateByExampleSelective(scenery,example);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }

        return i;
    }

    //    @Override
//    public void updateScenery(TtScenery scenery) {
//
//        try{
//            sceneryDao.updateByPrimaryKey(scenery);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//            e.printStackTrace();
//        }
//
//    }
}
