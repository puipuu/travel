package com.group.travel.web;

import com.group.travel.pojo.po.TtScenery;
import com.group.travel.service.SceneryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;


@Controller
public class SceneryAction {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private SceneryService sceneryService;

    @ResponseBody
    @RequestMapping(value = "/scenery/{id}", method = RequestMethod.GET)
    public TtScenery getItemById(@PathVariable("id") Long id) {

        return sceneryService.getSceneryById(id);
    }

    @ResponseBody
    @RequestMapping(value = "/sceneryLists",method = RequestMethod.GET)
    public List<TtScenery> sceneryList(){

        List<TtScenery> list = null;
        try {
            list = sceneryService.listScenery();
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return list;
    }

//    @ResponseBody
//    @RequestMapping(value = "/sceneryAdd",method = RequestMethod.POST)
//    public int addScenery(TtScenery scenery, String scenertContent){
//        int i = 0;
//        try {
//            i = sceneryService.addScenery(scenery,scenertContent);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//            e.printStackTrace();
//        }
//        return i;
//    }

    @ResponseBody
    @RequestMapping(value = "/addScenery",method = RequestMethod.POST)
    public int addScenery(TtScenery scenery){
        int i = 0;
        try {
            i = sceneryService.addScenery(scenery);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        System.out.println(i);
        return i;
    }

    @ResponseBody
    @RequestMapping(value = "/scenery/batch" ,method = RequestMethod.POST)
    public int batchUpdate(@RequestParam("ids[]") List<Long> ids,@RequestParam(value="aa") Integer aa){

        int i = 0;
        try{
            i = sceneryService.batchUpdate(ids,aa);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        System.out.print(i);
        return i;
    }


//    @ResponseBody
//    @RequestMapping(va= "/deleteScenery" ,method = RequestMethod.POST)
//    public int deleteScenery(@RequestParam("ids[]") List<Long> ids){
//
//        int i = 0;
//        try{
//            i = sceneryService.deleteScenery(ids);
//        }catch (Exception e) {
//            logger.error(e.getMessage(), e);
//            e.printStackTrace();
//        }
//        System.out.print(i);
//        return i;
//    }

    @ResponseBody
    @RequestMapping(value = "/updateScenery" ,method = RequestMethod.POST)
    public int updateScenery(TtScenery scenery){

        int i = 0;
        try{
            i = sceneryService.updateScenery(scenery);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        System.out.print(i);
        return i;
    }



//    @ResponseBody
//    @RequestMapping(value = "/scenery-update" ,method = RequestMethod.PUT)
//    public ModelAndView getSceneryById(@RequestParam("ids[]") List<Long> ids) {
//
//        ModelAndView modelAndView = new ModelAndView();
//        TtScenery scenery = sceneryService.getSceneryById(ids.get(0));
//        modelAndView.addObject("sceneryInfo",scenery);
//        return modelAndView;
//
//    }
//
//    @RequestMapping(value = "/sceneryUpdate", method = RequestMethod.PUT)
//    public String sceneryUpdate(TtScenery scenery) {
//
//        try {
//            sceneryService.updateScenery(scenery);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//            e.printStackTrace();
//        }
//        return "forward:/scenery-list";
//    }



}
