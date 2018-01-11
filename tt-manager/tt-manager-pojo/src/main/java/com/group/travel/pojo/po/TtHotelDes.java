package com.group.travel.pojo.po;

import java.util.Date;

public class TtHotelDes {
    private Long id;

    private Date created;

    private Date updated;

    private String hotelnorms;

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

    public String getHotelnorms() {
        return hotelnorms;
    }

    public void setHotelnorms(String hotelnorms) {
        this.hotelnorms = hotelnorms == null ? null : hotelnorms.trim();
    }
}