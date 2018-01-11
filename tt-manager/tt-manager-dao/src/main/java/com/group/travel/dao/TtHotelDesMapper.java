package com.group.travel.dao;

import com.group.travel.pojo.po.TtHotelDes;
import com.group.travel.pojo.po.TtHotelDesExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtHotelDesMapper {
    int countByExample(TtHotelDesExample example);

    int deleteByExample(TtHotelDesExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtHotelDes record);

    int insertSelective(TtHotelDes record);

    List<TtHotelDes> selectByExampleWithBLOBs(TtHotelDesExample example);

    List<TtHotelDes> selectByExample(TtHotelDesExample example);

    TtHotelDes selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtHotelDes record, @Param("example") TtHotelDesExample example);

    int updateByExampleWithBLOBs(@Param("record") TtHotelDes record, @Param("example") TtHotelDesExample example);

    int updateByExample(@Param("record") TtHotelDes record, @Param("example") TtHotelDesExample example);

    int updateByPrimaryKeySelective(TtHotelDes record);

    int updateByPrimaryKeyWithBLOBs(TtHotelDes record);

    int updateByPrimaryKey(TtHotelDes record);
}