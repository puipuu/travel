package com.group.travel.web;

import com.group.travel.dto.TreeNode;
import com.group.travel.pojo.po.TtCity;
import com.group.travel.service.CityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
}
