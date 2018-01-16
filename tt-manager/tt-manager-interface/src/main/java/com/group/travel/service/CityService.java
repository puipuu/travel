package com.group.travel.service;

import com.group.travel.dto.TreeNode;
import com.group.travel.pojo.po.TtCity;
import com.group.travel.pojo.po.TtCityArea;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/10
 * Time: 11:05
 * Version:V1.0
 */
public interface CityService {
    List<TtCity> listCitys();

    List<TreeNode> listCitysByParentId(Long parentId);

    List<TtCity> listCitysByIsParent();

    int addArea(TtCityArea ttCityArea);

    List<TtCityArea> listAreaByCid();
}
