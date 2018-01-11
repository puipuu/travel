package com.group.travel.dao;

import com.group.travel.pojo.po.TtHotel;
import com.group.travel.pojo.po.TtHotelExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtHotelMapper {
    int countByExample(TtHotelExample example);

    int deleteByExample(TtHotelExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtHotel record);

    int insertSelective(TtHotel record);

    List<TtHotel> selectByExample(TtHotelExample example);

    TtHotel selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtHotel record, @Param("example") TtHotelExample example);

    int updateByExample(@Param("record") TtHotel record, @Param("example") TtHotelExample example);

    int updateByPrimaryKeySelective(TtHotel record);

    int updateByPrimaryKey(TtHotel record);
}