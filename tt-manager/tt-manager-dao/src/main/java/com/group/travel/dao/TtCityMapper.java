package com.group.travel.dao;

import com.group.travel.pojo.po.TtCity;
import com.group.travel.pojo.po.TtCityExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtCityMapper {
    int countByExample(TtCityExample example);

    int deleteByExample(TtCityExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtCity record);

    int insertSelective(TtCity record);

    List<TtCity> selectByExample(TtCityExample example);

    TtCity selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtCity record, @Param("example") TtCityExample example);

    int updateByExample(@Param("record") TtCity record, @Param("example") TtCityExample example);

    int updateByPrimaryKeySelective(TtCity record);

    int updateByPrimaryKey(TtCity record);
}