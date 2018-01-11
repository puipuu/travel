package com.group.travel.web;


import com.group.travel.pojo.po.TtTravelgroup;
import com.group.travel.service.TravelGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * User: Qian ChengHui
 * Date: 2018/1/7
 * Time: 15:30
 * Version:V1.0
 */
@Controller
public class TravelGroupAction {

    @Autowired
    private TravelGroupService travelGroupService;

    @ResponseBody
    @RequestMapping(value = "/travelGroups" ,method = RequestMethod.GET)
    public List<TtTravelgroup> listAllTravelGroup(){
        List<TtTravelgroup> list = travelGroupService.listAllTravelGroup();
        return list;
    }

    @RequestMapping(value = "/addTravelGroup" ,method = RequestMethod.GET)
    public String addTravelGroup(TtTravelgroup travelGroup){
        System.out.println(travelGroup.toString());
        travelGroupService.addTravelGroup(travelGroup);
        return "forward:/travelgroup-list";
    }

    @ResponseBody
    @RequestMapping(value = "/deleteTravelGroup" ,method = RequestMethod.POST)
    public Integer deleteTravelGroup(@RequestParam("ids[]") List<Long> ids){
        System.out.println(ids.get(0));
        int i = travelGroupService.deleteTravelGroup(ids);
        return i;
    }

    @ResponseBody
    @RequestMapping(value = "/travelgroup-update" ,method = RequestMethod.GET)
    public ModelAndView getItemById(@RequestParam("ids[]") List<Long> ids) {
        System.out.println("-----------");
        ModelAndView mav = new ModelAndView();
        TtTravelgroup travelGroup = travelGroupService.getTravelGroupById(ids.get(0));
        mav.addObject("TravelGroupInfo",travelGroup);
        mav.setViewName("travelgroup-update");
        System.out.println("88888888");
        return mav;
    }

    @RequestMapping(value = "/updateTravelGroup" ,method = RequestMethod.GET)
    public String updateTravelGroup(TtTravelgroup travelGroup){
        System.out.println(travelGroup.toString());
        travelGroupService.updateTravelGroup(travelGroup);
        return "forward:/travelgroup-list";
    }
}
