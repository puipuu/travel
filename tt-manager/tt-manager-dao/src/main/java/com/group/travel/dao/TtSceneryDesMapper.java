package com.group.travel.dao;

import com.group.travel.pojo.po.TtSceneryDes;
import com.group.travel.pojo.po.TtSceneryDesExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtSceneryDesMapper {
    int countByExample(TtSceneryDesExample example);

    int deleteByExample(TtSceneryDesExample example);

    int insert(TtSceneryDes record);

    int insertSelective(TtSceneryDes record);

    List<TtSceneryDes> selectByExampleWithBLOBs(TtSceneryDesExample example);

    List<TtSceneryDes> selectByExample(TtSceneryDesExample example);

    int updateByExampleSelective(@Param("record") TtSceneryDes record, @Param("example") TtSceneryDesExample example);

    int updateByExampleWithBLOBs(@Param("record") TtSceneryDes record, @Param("example") TtSceneryDesExample example);

    int updateByExample(@Param("record") TtSceneryDes record, @Param("example") TtSceneryDesExample example);
}