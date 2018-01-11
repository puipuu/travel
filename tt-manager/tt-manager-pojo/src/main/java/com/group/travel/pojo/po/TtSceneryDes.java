package com.group.travel.pojo.po;

import java.util.Date;

public class TtSceneryDes {
    private Long id;

    private Date created;

    private Date updated;

    private String scenrtycontent;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getScenrtycontent() {
        return scenrtycontent;
    }

    public void setScenrtycontent(String scenrtycontent) {
        this.scenrtycontent = scenrtycontent == null ? null : scenrtycontent.trim();
    }
}