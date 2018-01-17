package com.group.travel.dao;

import com.group.travel.pojo.po.TtHotel;
import com.group.travel.pojo.po.TtHotelSupple;
import com.group.travel.pojo.po.TtHotelSuppleExample;
import com.group.travel.pojo.vo.TtHotelUn;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TtHotelUnMapper {

    List<TtHotelUn> selectBySerch(TtHotel example);

}