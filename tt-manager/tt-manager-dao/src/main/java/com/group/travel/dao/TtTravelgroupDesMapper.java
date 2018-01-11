package com.group.travel.dao;

import com.group.travel.pojo.po.TtTravelgroupDes;
import com.group.travel.pojo.po.TtTravelgroupDesExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtTravelgroupDesMapper {
    int countByExample(TtTravelgroupDesExample example);

    int deleteByExample(TtTravelgroupDesExample example);

    int insert(TtTravelgroupDes record);

    int insertSelective(TtTravelgroupDes record);

    List<TtTravelgroupDes> selectByExampleWithBLOBs(TtTravelgroupDesExample example);

    List<TtTravelgroupDes> selectByExample(TtTravelgroupDesExample example);

    int updateByExampleSelective(@Param("record") TtTravelgroupDes record, @Param("example") TtTravelgroupDesExample example);

    int updateByExampleWithBLOBs(@Param("record") TtTravelgroupDes record, @Param("example") TtTravelgroupDesExample example);

    int updateByExample(@Param("record") TtTravelgroupDes record, @Param("example") TtTravelgroupDesExample example);
}