package com.group.travel.pojo.po;

public class TtCityArea {
    private Long id;

    private Long cid;

    private String areaname;

    private String areanorms;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCid() {
        return cid;
    }

    public void setCid(Long cid) {
        this.cid = cid;
    }

    public String getAreaname() {
        return areaname;
    }

    public void setAreaname(String areaname) {
        this.areaname = areaname == null ? null : areaname.trim();
    }

    public String getAreanorms() {
        return areanorms;
    }

    public void setAreanorms(String areanorms) {
        this.areanorms = areanorms == null ? null : areanorms.trim();
    }
}