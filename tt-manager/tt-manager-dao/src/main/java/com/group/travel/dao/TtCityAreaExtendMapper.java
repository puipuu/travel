package com.group.travel.dao;

import com.group.travel.pojo.po.TtCityArea;
import com.group.travel.pojo.po.TtCityAreaExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TtCityAreaExtendMapper {
    List<TtCityArea> selectByIsParent();

    List<TtCityArea> selectByCid(TtCityArea area);

    List<TtCityArea> selectByCidtoBase(TtCityArea area);

    List<TtCityArea> selectByCidtoBlob(TtCityArea area);

    TtCityArea selectById(TtCityArea area);

    int selectCountByCid(TtCityArea area);
}