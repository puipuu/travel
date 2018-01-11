package com.group.travel.pojo.po;

public class TtHotel {
    private Long id;

    private String hotelname;

    private String hoteladdress;

    private Long cityid;

    private Long hotelprice;

    private String hotelpicture;

    private Integer hotelleve;

    private Integer cid;

    private Integer status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHotelname() {
        return hotelname;
    }

    public void setHotelname(String hotelname) {
        this.hotelname = hotelname == null ? null : hotelname.trim();
    }

    public String getHoteladdress() {
        return hoteladdress;
    }

    public void setHoteladdress(String hoteladdress) {
        this.hoteladdress = hoteladdress == null ? null : hoteladdress.trim();
    }

    public Long getCityid() {
        return cityid;
    }

    public void setCityid(Long cityid) {
        this.cityid = cityid;
    }

    public Long getHotelprice() {
        return hotelprice;
    }

    public void setHotelprice(Long hotelprice) {
        this.hotelprice = hotelprice;
    }

    public String getHotelpicture() {
        return hotelpicture;
    }

    public void setHotelpicture(String hotelpicture) {
        this.hotelpicture = hotelpicture == null ? null : hotelpicture.trim();
    }

    public Integer getHotelleve() {
        return hotelleve;
    }

    public void setHotelleve(Integer hotelleve) {
        this.hotelleve = hotelleve;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}