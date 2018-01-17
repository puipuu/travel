package com.group.travel.pojo.vo;

import com.group.travel.pojo.po.TtHotel;

/**
 * User: Shinelon
 * Date: 2018/1/16
 * Time: 22:08
 * Version:V1.0
 */
public class TtHotelUn extends TtHotel{
    private Long areaid;

    private String ename;

    private String openTime;

    private Integer roomsCount;

    private Long latitude;

    private Long longitude;

    public Long getAreaid() {
        return areaid;
    }

    public void setAreaid(Long areaid) {
        this.areaid = areaid;
    }

    public String getEname() {
        return ename;
    }

    public void setEname(String ename) {
        this.ename = ename == null ? null : ename.trim();
    }

    public String getOpenTime() {
        return openTime;
    }

    public void setOpenTime(String openTime) {
        this.openTime = openTime == null ? null : openTime.trim();
    }

    public Integer getRoomsCount() {
        return roomsCount;
    }

    public void setRoomsCount(Integer roomsCount) {
        this.roomsCount = roomsCount;
    }

    public Long getLatitude() {
        return latitude;
    }

    public void setLatitude(Long latitude) {
        this.latitude = latitude;
    }

    public Long getLongitude() {
        return longitude;
    }

    public void setLongitude(Long longitude) {
        this.longitude = longitude;
    }
}
