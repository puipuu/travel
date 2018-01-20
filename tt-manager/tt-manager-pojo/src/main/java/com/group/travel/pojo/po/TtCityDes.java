package com.group.travel.pojo.po;

public class TtCityDes {
    private Long cityid;

    private String areanorms;

    public Long getCityid() {
        return cityid;
    }

    public void setCityid(Long cityid) {
        this.cityid = cityid;
    }

    public String getAreanorms() {
        return areanorms;
    }

    public void setAreanorms(String areanorms) {
        this.areanorms = areanorms == null ? null : areanorms.trim();
    }
}