package com.group.travel.pojo.po;

public class TtScenery {
    private Long id;

    private String sceneryname;

    private Long cityid;

    private Long scneryprice;

    private String scenerypicture;

    private Integer sid;

    private Integer status;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSceneryname() {
        return sceneryname;
    }

    public void setSceneryname(String sceneryname) {
        this.sceneryname = sceneryname == null ? null : sceneryname.trim();
    }

    public Long getCityid() {
        return cityid;
    }

    public void setCityid(Long cityid) {
        this.cityid = cityid;
    }

    public Long getScneryprice() {
        return scneryprice;
    }

    public void setScneryprice(Long scneryprice) {
        this.scneryprice = scneryprice;
    }

    public String getScenerypicture() {
        return scenerypicture;
    }

    public void setScenerypicture(String scenerypicture) {
        this.scenerypicture = scenerypicture == null ? null : scenerypicture.trim();
    }
}