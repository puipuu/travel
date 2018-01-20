package com.group.travel.service.impl;

import com.group.travel.dao.*;
import com.group.travel.pojo.po.TtHotel;
import com.group.travel.pojo.po.TtHotelDes;
import com.group.travel.pojo.po.TtHotelExample;
import com.group.travel.pojo.po.TtHotelSupple;
import com.group.travel.pojo.vo.Page;
import com.group.travel.pojo.vo.TtHotelFull;
import com.group.travel.pojo.vo.TtHotelUn;
import com.group.travel.service.HotelsService;
import com.group.travel.utils.IDUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/9
 * Time: 14:29
 * Version:V1.0
 */
@Service
public class HotelsServiceImpl implements HotelsService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private TtHotelMapper hotelsDao;
    @Autowired
    private TtHotelDesMapper hotelsDescDao;
    @Autowired
    private TtHotelExtendMapper hotelExtendDao;
    @Autowired
    private TtHotelSuppleMapper hotelSuppleDao;
    @Autowired
    private TtHotelUnMapper hotelSuppleUnDao;
    @Override
    public TtHotel getHotelsById(Long id) {
        return hotelsDao.selectByPrimaryKey(id);
    }

    @Override
    public List<TtHotelUn> listHotels() {
        List<TtHotelUn> list = null;
        try {
            TtHotel hotel = new TtHotel();
            hotel.setStatus(3);
            //list = hotelsDao.selectByExample(null);
            list = hotelSuppleUnDao.selectBySerch(hotel);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

/*    @Override
    public List<TtHotel> listHotels() {
        List<TtHotel> list = null;
        try {
            TtHotel hotel = new TtHotel();
            hotel.setStatus(3);
            //list = hotelsDao.selectByExample(null);
            list = hotelExtendDao.selectByStatus(hotel);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }*/

    //这里的saveItem事务方法，注意并不是事务方法越多越好，查询方法不需要写成事务方法
    //事务方法应该尽量注意其原子性，假如事务方法有调用第三方接口的操作，那么建议拆解后使用
    @Transactional
    @Override
    public int saveHotel(TtHotel hotel, String hotelDesc) {
        int i = 0;
        try {
            //存放两张表
            Long itemId  = IDUtils.getItemId();
            hotel.setId(itemId);
            i = hotelsDao.insert(hotel);
            TtHotelDes ttHotelDes = new TtHotelDes();
            ttHotelDes.setId(itemId);
            ttHotelDes.setHotelnorms(hotelDesc);
            Date date = new Date();
            Timestamp nousedate = new Timestamp(date.getTime());
            ttHotelDes.setCreated(nousedate);
            ttHotelDes.setUpdated(nousedate);
            i += hotelsDescDao.insert(ttHotelDes);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @Transactional
    @Override
    public int saveHotel(TtHotel hotel, String hotelDesc, TtHotelSupple supple) {
        int i = 0;
        try {
            //存放两张表
            Long itemId  = IDUtils.getItemId();
            hotel.setId(itemId);
            i = hotelsDao.insert(hotel);
            TtHotelDes ttHotelDes = new TtHotelDes();
            ttHotelDes.setId(itemId);
            ttHotelDes.setHotelnorms(hotelDesc);
            Date date = new Date();
            Timestamp nousedate = new Timestamp(date.getTime());
            ttHotelDes.setCreated(nousedate);
            ttHotelDes.setUpdated(nousedate);
            i += hotelsDescDao.insert(ttHotelDes);
            supple.setHotelid(itemId);
            i += hotelSuppleDao.insert(supple);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    public List<TtHotelFull> listHotelsByOffset(Long cid,Long areaid,Long current) {
        List<TtHotelFull> list = null;
        try {
            TtHotelFull hotel = new TtHotelFull();
            current = current-1;
            hotel.setCurrent(current);
            hotel.setCityid(cid);
            if (cid==areaid){
                hotel.setAreaid(Long.valueOf(0));
            }else {
                hotel.setAreaid(areaid);
            }
            list = hotelSuppleUnDao.selectByOffset(hotel);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @Override
    public List<TtHotelUn> listHotels(TtHotel hotel) {
        List<TtHotelUn> list = null;
        try {
            TtHotel ttHotel = new TtHotel();
            if (hotel.getStatus() == 0 ){
                ttHotel.setHotelname(hotel.getHotelname());
                list = hotelSuppleUnDao.selectBySerch(ttHotel);
            }else {
                list = hotelSuppleUnDao.selectBySerch(hotel);
            }
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @Override
    public Page getPageInfo(Page page) {
        int count = 0;
        try {
            if (page.getAreaid()==page.getCityid()){
                Page page1 = new Page();
                page1.setAreaid(Long.valueOf(0));
                page1.setCityid(page.getCityid());
                count  = hotelSuppleUnDao.selectCount(page1);
            }else {
                count  = hotelSuppleUnDao.selectCount(page);
            }

        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        Integer curent = page.getCurrent();
        List<Integer> pages = new ArrayList<>();
        int total = 0;
        if (count%10 == 0){
            total = count/10;
        }else {
            total = count/10+1;
        }
        List<Integer> page5 = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            page5.add(i);
        }
        if (curent < 4){
            if (total > 4) {
                pages = page5;
            }else {
                for (int i = 1; i <= total; i++) {
                    pages.add(i);
                }
            }
            page.setPages(pages);
        }else if (curent < 9) {
            if (total >= (curent + 2)){
                for (int i = 1; i <= (curent + 2); i++) {
                    pages.add(i);
                }
            }else if (total == (curent + 1)){
                for (int i = 1; i <= (curent + 1); i++) {
                    pages.add(i);
                }
            }else {
                for (int i = 1; i <= total; i++) {
                    pages.add(i);
                }
            }
            page.setPages(pages);
        }else {
            if (total >= (curent + 2)){
                pages = page5;
                for (int i = (curent - 2); i <= 5; i++) {
                    pages.add(i);
                }
            }else if (total == (curent + 1)){
                pages = page5;
                for (int i = (curent - 2); i <= 4; i++) {
                    pages.add(i);
                }
            }else {
                pages = page5;
                for (int i = (curent - 2); i <= 3; i++) {
                    pages.add(i);
                }
            }
            page.setPages(pages);
        }
        page.setCount(count);
        page.setTotal(total);
        return page;
    }

/*    @Override
    public int batchUpdate(List<Long> ids) {
        int i = 0;
        try {
            TtHotel hotel = new TtHotel();
            hotel.setStatus(3);
            //创建更新模板
            TtHotelExample example =new TtHotelExample();
            TtHotelExample.Criteria criteria = example.createCriteria();
            criteria.andIdIn(ids);
            //执行更新操作
            i = hotelsDao.updateByExampleSelective(hotel,example);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }*/

    @Override
    public int updateHotel(TtHotel hotel) {
        int i = 0;
        try {
            i = hotelsDao.updateByPrimaryKeySelective(hotel);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }


    @Override
    public int updateHotel(TtHotel hotel, TtHotelSupple supple) {
        int i = 0;
        try {
            supple.setHotelid(hotel.getId());
            i = hotelsDao.updateByPrimaryKeySelective(hotel);
            i = i + hotelSuppleDao.updateByPrimaryKeySelective(supple);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    public int batchUpdate(List<Long> ids, Integer aa) {
        int i = 0;
        try {
            TtHotel hotel = new TtHotel();
            hotel.setStatus(aa);
            //创建更新模板
            TtHotelExample example =new TtHotelExample();
            TtHotelExample.Criteria criteria = example.createCriteria();
            criteria.andIdIn(ids);
            //执行更新操作
            i = hotelsDao.updateByExampleSelective(hotel,example);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    public List<TtHotel> listHotelsSerch(TtHotel hotel) {
        List<TtHotel> list = null;
        try {
            TtHotel ttHotel = new TtHotel();
            if (hotel.getStatus() == 0 ){
                ttHotel.setHotelname(hotel.getHotelname());
                list = hotelExtendDao.selectBySerch(ttHotel);
            }else {
                list = hotelExtendDao.selectBySerch(hotel);
            }
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }



}
