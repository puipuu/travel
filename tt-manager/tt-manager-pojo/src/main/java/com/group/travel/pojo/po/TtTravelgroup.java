package com.group.travel.pojo.po;

public class TtTravelgroup {
    private Long id;

    private String title;

    private String startplace;

    private String destination;

    private Long travelgroupprice;

    private Integer travelday;

    private String travelfeature;

    private Integer isdiscount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getStartplace() {
        return startplace;
    }

    public void setStartplace(String startplace) {
        this.startplace = startplace == null ? null : startplace.trim();
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination == null ? null : destination.trim();
    }

    public Long getTravelgroupprice() {
        return travelgroupprice;
    }

    public void setTravelgroupprice(Long travelgroupprice) {
        this.travelgroupprice = travelgroupprice;
    }

    public Integer getTravelday() {
        return travelday;
    }

    public void setTravelday(Integer travelday) {
        this.travelday = travelday;
    }

    public String getTravelfeature() {
        return travelfeature;
    }

    public void setTravelfeature(String travelfeature) {
        this.travelfeature = travelfeature == null ? null : travelfeature.trim();
    }

    public Integer getIsdiscount() {
        return isdiscount;
    }

    public void setIsdiscount(Integer isdiscount) {
        this.isdiscount = isdiscount;
    }
}