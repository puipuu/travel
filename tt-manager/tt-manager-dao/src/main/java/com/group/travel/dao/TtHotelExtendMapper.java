package com.group.travel.dao;

import com.group.travel.pojo.po.TtHotel;


import java.util.List;

public interface TtHotelExtendMapper {
    List<TtHotel> selectByStatus(TtHotel example);

    List<TtHotel> selectBySerch(TtHotel example);
}