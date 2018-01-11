package com.group.travel.dao;

import com.group.travel.pojo.po.TtUser;
import com.group.travel.pojo.po.TtUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtUserMapper {
    int countByExample(TtUserExample example);

    int deleteByExample(TtUserExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtUser record);

    int insertSelective(TtUser record);

    List<TtUser> selectByExample(TtUserExample example);

    TtUser selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtUser record, @Param("example") TtUserExample example);

    int updateByExample(@Param("record") TtUser record, @Param("example") TtUserExample example);

    int updateByPrimaryKeySelective(TtUser record);

    int updateByPrimaryKey(TtUser record);
}