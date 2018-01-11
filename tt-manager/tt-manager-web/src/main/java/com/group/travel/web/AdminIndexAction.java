package com.group.travel.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AdminIndexAction {

    @RequestMapping(value = "/",method = RequestMethod.GET )
    public  String index(){
        return "index";
    }

    @RequestMapping(value = "/{page}",method = RequestMethod.GET)
    public String toJsp(@PathVariable("page") String page){ return page;}
    /*@RequestMapping(value = "/top",method = RequestMethod.GET )
    public  String top(){
        return "top";
    }
    @RequestMapping(value = "/left",method = RequestMethod.GET )
    public  String left(){
        return "left";
    }
    @RequestMapping(value = "/center",method = RequestMethod.GET )
    public  String center(){
        return "center";
    }*/
}
