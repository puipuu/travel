package com.group.travel.dao;

import com.group.travel.pojo.po.TtHotelSupple;
import com.group.travel.pojo.po.TtHotelSuppleExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtHotelSuppleMapper {
    int countByExample(TtHotelSuppleExample example);

    int deleteByExample(TtHotelSuppleExample example);

    int deleteByPrimaryKey(Long hotelid);

    int insert(TtHotelSupple record);

    int insertSelective(TtHotelSupple record);

    List<TtHotelSupple> selectByExample(TtHotelSuppleExample example);

    TtHotelSupple selectByPrimaryKey(Long hotelid);

    int updateByExampleSelective(@Param("record") TtHotelSupple record, @Param("example") TtHotelSuppleExample example);

    int updateByExample(@Param("record") TtHotelSupple record, @Param("example") TtHotelSuppleExample example);

    int updateByPrimaryKeySelective(TtHotelSupple record);

    int updateByPrimaryKey(TtHotelSupple record);
}