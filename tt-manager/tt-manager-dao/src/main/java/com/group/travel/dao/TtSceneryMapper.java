package com.group.travel.dao;

import com.group.travel.pojo.po.TtScenery;
import com.group.travel.pojo.po.TtSceneryExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TtSceneryMapper {
    int countByExample(TtSceneryExample example);

    int deleteByExample(TtSceneryExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtScenery record);

    int insertSelective(TtScenery record);

    List<TtScenery> selectByExample(TtSceneryExample example);

    TtScenery selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtScenery record, @Param("example") TtSceneryExample example);

    int updateByExample(@Param("record") TtScenery record, @Param("example") TtSceneryExample example);

    int updateByPrimaryKeySelective(TtScenery record);

    int updateByPrimaryKey(TtScenery record);
}