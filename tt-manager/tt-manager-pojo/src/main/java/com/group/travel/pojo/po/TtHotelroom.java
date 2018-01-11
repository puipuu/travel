package com.group.travel.pojo.po;

public class TtHotelroom {
    private Long id;

    private Long hotelid;

    private Integer hotelstyle;

    private Integer peoplennum;

    private Long hotelroomprice;

    private Integer roomnum;

    private String roompicture;

    private Integer standardid;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getHotelid() {
        return hotelid;
    }

    public void setHotelid(Long hotelid) {
        this.hotelid = hotelid;
    }

    public Integer getHotelstyle() {
        return hotelstyle;
    }

    public void setHotelstyle(Integer hotelstyle) {
        this.hotelstyle = hotelstyle;
    }

    public Integer getPeoplennum() {
        return peoplennum;
    }

    public void setPeoplennum(Integer peoplennum) {
        this.peoplennum = peoplennum;
    }

    public Long getHotelroomprice() {
        return hotelroomprice;
    }

    public void setHotelroomprice(Long hotelroomprice) {
        this.hotelroomprice = hotelroomprice;
    }

    public Integer getRoomnum() {
        return roomnum;
    }

    public void setRoomnum(Integer roomnum) {
        this.roomnum = roomnum;
    }

    public String getRoompicture() {
        return roompicture;
    }

    public void setRoompicture(String roompicture) {
        this.roompicture = roompicture == null ? null : roompicture.trim();
    }

    public Integer getStandardid() {
        return standardid;
    }

    public void setStandardid(Integer standardid) {
        this.standardid = standardid;
    }
}