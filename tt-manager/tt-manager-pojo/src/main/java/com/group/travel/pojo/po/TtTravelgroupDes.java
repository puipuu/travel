package com.group.travel.pojo.po;

import java.util.Date;

public class TtTravelgroupDes {
    private Long id;

    private Long travelgroupid;

    private Date created;

    private Date updated;

    private String travelcontent;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTravelgroupid() {
        return travelgroupid;
    }

    public void setTravelgroupid(Long travelgroupid) {
        this.travelgroupid = travelgroupid;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public String getTravelcontent() {
        return travelcontent;
    }

    public void setTravelcontent(String travelcontent) {
        this.travelcontent = travelcontent == null ? null : travelcontent.trim();
    }
}