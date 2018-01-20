package com.group.travel.dao;

import com.group.travel.pojo.po.TtCityDes;
import com.group.travel.pojo.po.TtCityDesExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtCityDesMapper {
    int countByExample(TtCityDesExample example);

    int deleteByExample(TtCityDesExample example);

    int deleteByPrimaryKey(Long cityid);

    int insert(TtCityDes record);

    int insertSelective(TtCityDes record);

    List<TtCityDes> selectByExampleWithBLOBs(TtCityDesExample example);

    List<TtCityDes> selectByExample(TtCityDesExample example);

    TtCityDes selectByPrimaryKey(Long cityid);

    int updateByExampleSelective(@Param("record") TtCityDes record, @Param("example") TtCityDesExample example);

    int updateByExampleWithBLOBs(@Param("record") TtCityDes record, @Param("example") TtCityDesExample example);

    int updateByExample(@Param("record") TtCityDes record, @Param("example") TtCityDesExample example);

    int updateByPrimaryKeySelective(TtCityDes record);

    int updateByPrimaryKeyWithBLOBs(TtCityDes record);
}