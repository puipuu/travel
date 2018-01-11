package com.group.travel.web;

import com.group.travel.pojo.po.TtUser;
import com.group.travel.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
@Controller
public class UserAction {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserService userService;



    @ResponseBody
    @RequestMapping(value = "/selectuser",method = RequestMethod.GET)
    public List<TtUser> selectuser(){
        List<TtUser> userList = null;
        try {
            userList = userService.selectUser();
            System.out.println(userList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userList;
    }
    @ResponseBody
    @RequestMapping(value = "/adduser",method = RequestMethod.POST)
    public int addUser(TtUser TtUser){
        int i = 0;
        try {
            i = userService.addUser(TtUser);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(i);
        return i;
    }


    @ResponseBody
    @RequestMapping(value = "/user/removeuser" ,method = RequestMethod.POST)
    public int removeuser(@RequestParam("ids[]") List<Long> ids, @RequestParam(value="aa") Integer aa){
        int i = 0;
        try{
            i = userService.removeuser(ids,aa);
        }catch (Exception e) {
            e.printStackTrace();
        }
        System.out.print(i);
        return i;
    }

    @ResponseBody
    @RequestMapping(value = "/user/update",method = RequestMethod.GET)
    public int updateHotel(TtUser user){
        int i = 0;
        System.out.println(user.toString());
        try{
            i = userService.updateUser(user);
        }catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

}
