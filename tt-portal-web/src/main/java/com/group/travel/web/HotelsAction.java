package com.group.travel.web;

import com.group.travel.pojo.po.TtCity;
import com.group.travel.pojo.po.TtCityArea;
import com.group.travel.pojo.po.TtCityDes;
import com.group.travel.pojo.po.TtHotel;
import com.group.travel.pojo.vo.Page;
import com.group.travel.pojo.vo.TtHotelFull;
import com.group.travel.pojo.vo.TtHotelUn;
import com.group.travel.service.CityService;
import com.group.travel.service.HotelsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/19
 * Time: 9:13
 * Version:V1.0
 */
@Controller
public class HotelsAction {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private HotelsService hotelsService;
    @Autowired
    private CityService cityService;

    @RequestMapping(value = "/hotels/{id}.html",method = RequestMethod.GET)
    public String  getHotelsById(@PathVariable("id") Long id,Model model){
        TtCity city = cityService.CityById(id);
        int count = cityService.areaCount(id);
        TtCityDes des = cityService.CityDesById(id);
        model.addAttribute("des",des);
        model.addAttribute("city",city);
        model.addAttribute("count",count);
        return "hotels";
    }

    @RequestMapping(value = "/hotel/{id}.html",method = RequestMethod.GET)
    public String  getHotelById(@PathVariable("id") Long id,Model model){
        List<TtCityArea> list = null;
        return  "hotel";
    }

    @RequestMapping(value = "/hotel",method = RequestMethod.GET)
    public String  toHotel(){
        return  "hotel-city";
    }

    @ResponseBody
    @RequestMapping(value = "/hotel/areas",method = RequestMethod.GET)
    public List<TtCityArea>  getAreasByCid(@RequestParam("cid") Long cid){
        List<TtCityArea> list = null;
        try {
            list = cityService.listAreaByCidtoCity(cid);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @ResponseBody
    @RequestMapping(value = "/hotel/area",method = RequestMethod.GET)
    public TtCityArea getAreaById(@RequestParam("id") Long id){
        TtCityArea area = null;
        System.out.println(id);
        try {
            area = cityService.CityAreaById(id);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  area;
    }

    @ResponseBody
    @RequestMapping(value = "/hotel/cityDes",method = RequestMethod.GET)
    public TtCityDes getCityDesById(@RequestParam("id") Long id){
        TtCityDes des = null;
        System.out.println(id);
        try {
            des = cityService.CityDesById(id);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  des;
    }


    @ResponseBody
    @RequestMapping(value = "/hotel/hotels",method = RequestMethod.GET)
    public List<TtHotelFull>  getHotelsByCid(@RequestParam("cid") Long cid,@RequestParam("areaid") Long areaid,@RequestParam("current") Long current){
        List<TtHotelFull> list = null;
        try {
            list = hotelsService.listHotelsByOffset(cid,areaid,current);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @ResponseBody
    @RequestMapping(value = "/hotel/page",method = RequestMethod.GET)
    public Page getPageInfo(Page page){
        try {
            page = hotelsService.getPageInfo(page);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return page;
    }

}
