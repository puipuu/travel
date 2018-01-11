package com.group.travel.dao;

import com.group.travel.pojo.po.TtTravelgroup;
import com.group.travel.pojo.po.TtTravelgroupExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtTravelgroupMapper {
    int countByExample(TtTravelgroupExample example);

    int deleteByExample(TtTravelgroupExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtTravelgroup record);

    int insertSelective(TtTravelgroup record);

    List<TtTravelgroup> selectByExample(TtTravelgroupExample example);

    TtTravelgroup selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtTravelgroup record, @Param("example") TtTravelgroupExample example);

    int updateByExample(@Param("record") TtTravelgroup record, @Param("example") TtTravelgroupExample example);

    int updateByPrimaryKeySelective(TtTravelgroup record);

    int updateByPrimaryKey(TtTravelgroup record);
}