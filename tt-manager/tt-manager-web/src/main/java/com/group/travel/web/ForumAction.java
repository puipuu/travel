package com.group.travel.web;

import com.group.travel.pojo.po.TtForum;
import com.group.travel.service.ForumService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ForumAction {

    private Logger logger= LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ForumService forumService;

/*@RequestMapping("/")
    public String doIndex(){
        return "index";

    }*/
//    @RequestMapping("/")
//    public String doIn(){
//        return "forum";
//
//    }

    @ResponseBody
    @RequestMapping(value = "/forum/{id}", method = RequestMethod.GET)
    public TtForum getItemById(@PathVariable("id") Long id) {

        return forumService.getSceneryById(id);
    }


    @ResponseBody
    @RequestMapping( value="/forumlists", method = RequestMethod.GET)
    public List<TtForum> sceneryList(){

        List<TtForum> list = null;
        try {
            list = forumService.listForm();
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return list;

    }



    @ResponseBody
    @RequestMapping(value = "/deleteforum" ,method = RequestMethod.GET)
    public int deleteTravelGroup(@RequestParam("ids[]") List<Long> ids){
        System.out.println(ids.get(0));
      Integer i =forumService.deleteforum(ids);
        System.out.println(i);
        return i;

    }




}
