package com.group.travel.pojo.vo;

/**
 * User: Shinelon
 * Date: 2018/1/19
 * Time: 23:56
 * Version:V1.0
 */
public class TtHotelFull extends TtHotelUn {
    private String hotelnorms;

    private String areaname;

    private Long current;

    public Long getCurrent() {
        return current;
    }

    public void setCurrent(Long current) {
        this.current = current;
    }

    public String getAreaname() {
        return areaname;
    }

    public void setAreaname(String areaname) {
        this.areaname = areaname;
    }

    public String getHotelnorms() {
        return hotelnorms;
    }

    public void setHotelnorms(String hotelnorms) {
        this.hotelnorms = hotelnorms;
    }
}
