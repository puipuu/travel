package com.group.travel.dao;

import com.group.travel.pojo.po.TtCity;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/11
 * Time: 0:05
 * Version:V1.0
 */
public interface TtCityExtendMapper {
    List<TtCity> selectByIsParent(TtCity example);
}
