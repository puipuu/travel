package com.group.travel.pojo.vo;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/20
 * Time: 17:01
 * Version:V1.0
 */
public class Page {
    private Integer total;

    private Integer count;

    private Integer current;

    private Long cityid;

    private Long areaid;

    private List<Integer> pages;

    public List<Integer> getPages() {
        return pages;
    }

    public void setPages(List<Integer> pages) {
        this.pages = pages;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Integer getCurrent() {
        return current;
    }

    public void setCurrent(Integer current) {
        this.current = current;
    }

    public Long getCityid() {
        return cityid;
    }

    public void setCityid(Long cityid) {
        this.cityid = cityid;
    }

    public Long getAreaid() {
        return areaid;
    }

    public void setAreaid(Long areaid) {
        this.areaid = areaid;
    }
}
