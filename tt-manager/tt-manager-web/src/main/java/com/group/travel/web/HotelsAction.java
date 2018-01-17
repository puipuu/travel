package com.group.travel.web;


import com.group.travel.pojo.po.TtHotel;
import com.group.travel.pojo.po.TtHotelSupple;
import com.group.travel.pojo.vo.TtHotelUn;
import com.group.travel.service.HotelsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * User: Shinelon
 * Date: 2018/1/9
 * Time: 14:06
 * Version:V1.0
 */
@Controller
public class HotelsAction {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private HotelsService hotelsService;


    @ResponseBody
    @RequestMapping(value = "/hotels/{id}",method = RequestMethod.GET)
    public TtHotel getHotelsById(@PathVariable("id") Long id){
        return hotelsService.getHotelsById(id);
    }

    @ResponseBody
    @RequestMapping(value = "/hotels",method = RequestMethod.GET)
    public List<TtHotelUn> listHotels(){
        List<TtHotelUn> list = null;
        try {
            list = hotelsService.listHotels();
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @ResponseBody
    @RequestMapping(value = "/hotels/serch",method = RequestMethod.GET)
    public List<TtHotelUn> listHotelsSerch(TtHotel hotel){
/*        List<TtHotel> list = null;
        try {
            list = hotelsService.listHotelsSerch(hotel);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;*/
        List<TtHotelUn> list = null;
        try {
            list = hotelsService.listHotels();
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @ResponseBody
    @RequestMapping(value = "/hotel",method = RequestMethod.POST)
    public int saveHotel(TtHotel hotel,String hotelDesc,TtHotelSupple supple){
        int i = 0;
        try{
            i = hotelsService.saveHotel(hotel,hotelDesc,supple);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @ResponseBody
    @RequestMapping(value = "/hotel/batch",method = RequestMethod.POST)
    public int batchUpdate(@RequestParam(value = "ids[]") List<Long> ids,@RequestParam(value = "aa") Integer aa){
        int i = 0;
        System.out.println(aa);
        try{
            i = hotelsService.batchUpdate(ids,aa);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }
/*
    @ResponseBody
    @RequestMapping(value = "/hotel/batch/{statu}",method = RequestMethod.POST)
    public int batchUpdate(@RequestParam("ids[]") List<Long> ids,@RequestParam("statu") String statu){
        int i = 0;
        try{
            i = hotelsService.batchUpdate(ids,statu);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }*/

    @ResponseBody
    @RequestMapping(value = "/hotel/update",method = RequestMethod.POST)
    public int updateHotel(TtHotel hotel, TtHotelSupple supple){
        int i = 0;
        try{
            i = hotelsService.updateHotel(hotel,supple);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @ResponseBody
    @RequestMapping(value = "/hotel/update2",method = RequestMethod.POST)
    public int updateHotel(TtHotel hotel){
        int i = 0;
        try{
            i = hotelsService.updateHotel(hotel);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

}
