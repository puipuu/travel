package com.group.travel.dao;

import com.group.travel.pojo.po.TtHotelroom;
import com.group.travel.pojo.po.TtHotelroomExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtHotelroomMapper {
    int countByExample(TtHotelroomExample example);

    int deleteByExample(TtHotelroomExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtHotelroom record);

    int insertSelective(TtHotelroom record);

    List<TtHotelroom> selectByExample(TtHotelroomExample example);

    TtHotelroom selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtHotelroom record, @Param("example") TtHotelroomExample example);

    int updateByExample(@Param("record") TtHotelroom record, @Param("example") TtHotelroomExample example);

    int updateByPrimaryKeySelective(TtHotelroom record);

    int updateByPrimaryKey(TtHotelroom record);
}