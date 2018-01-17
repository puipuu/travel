package com.group.travel.web;

import com.group.travel.dto.TreeNode;
import com.group.travel.pojo.po.TtCity;
import com.group.travel.pojo.po.TtCityArea;
import com.group.travel.pojo.po.TtHotel;
import com.group.travel.service.CityService;
import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/10
 * Time: 11:03
 * Version:V1.0
 */
@Controller
public class CityAction {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private CityService cityService;


    @ResponseBody
    @RequestMapping(value = "/city")
    public List<TreeNode> getCityById(@RequestParam("parentId") Long parentId){
        List<TreeNode> list = null;
        try {
            list = cityService.listCitysByParentId(parentId);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @ResponseBody
    @RequestMapping(value = "/ttcity")
    public List<TtCity> getTtCityByIdIsParent(){
        List<TtCity> list = null;
        try {
            list = cityService.listCitysByIsParent();
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @ResponseBody
    @RequestMapping(value = "/ttcity/ttareacid")
    public List<TreeNode> getTtAreaByCid(@RequestParam("cid[]") List<Long> cids){
        List<TreeNode> list = null;
        try {
            list = cityService.listAreaByCid(cids.get(0));
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @ResponseBody
    @RequestMapping(value = "/ttcity/ttarea")
    public List<TtCityArea> getTtArea(){
        List<TtCityArea> list = null;
        try {
            list = cityService.listAreaByCid();
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @ResponseBody
    @RequestMapping(value = "/ttcity/area")
    public int areaAdd(TtCityArea area){

        int i = 0;
        try {
            i = cityService.addArea(area);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(i);
        return i;
    }

}
