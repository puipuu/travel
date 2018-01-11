package com.group.travel.dao;

import com.group.travel.pojo.po.TtOrders;
import com.group.travel.pojo.po.TtOrdersExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtOrdersMapper {
    int countByExample(TtOrdersExample example);

    int deleteByExample(TtOrdersExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtOrders record);

    int insertSelective(TtOrders record);

    List<TtOrders> selectByExample(TtOrdersExample example);

    TtOrders selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtOrders record, @Param("example") TtOrdersExample example);

    int updateByExample(@Param("record") TtOrders record, @Param("example") TtOrdersExample example);

    int updateByPrimaryKeySelective(TtOrders record);

    int updateByPrimaryKey(TtOrders record);
}