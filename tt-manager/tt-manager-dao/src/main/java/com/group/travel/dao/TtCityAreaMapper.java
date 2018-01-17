package com.group.travel.dao;

import com.group.travel.pojo.po.TtCityArea;
import com.group.travel.pojo.po.TtCityAreaExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtCityAreaMapper {
    int countByExample(TtCityAreaExample example);

    int deleteByExample(TtCityAreaExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtCityArea record);

    int insertSelective(TtCityArea record);

    List<TtCityArea> selectByExampleWithBLOBs(TtCityAreaExample example);

    List<TtCityArea> selectByExample(TtCityAreaExample example);

    TtCityArea selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtCityArea record, @Param("example") TtCityAreaExample example);

    int updateByExampleWithBLOBs(@Param("record") TtCityArea record, @Param("example") TtCityAreaExample example);

    int updateByExample(@Param("record") TtCityArea record, @Param("example") TtCityAreaExample example);

    int updateByPrimaryKeySelective(TtCityArea record);

    int updateByPrimaryKeyWithBLOBs(TtCityArea record);

    int updateByPrimaryKey(TtCityArea record);
}