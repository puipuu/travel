package com.group.travel.dao;

import com.group.travel.pojo.po.TtReplyforum;
import com.group.travel.pojo.po.TtReplyforumExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtReplyforumMapper {
    int countByExample(TtReplyforumExample example);

    int deleteByExample(TtReplyforumExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtReplyforum record);

    int insertSelective(TtReplyforum record);

    List<TtReplyforum> selectByExample(TtReplyforumExample example);

    TtReplyforum selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtReplyforum record, @Param("example") TtReplyforumExample example);

    int updateByExample(@Param("record") TtReplyforum record, @Param("example") TtReplyforumExample example);

    int updateByPrimaryKeySelective(TtReplyforum record);

    int updateByPrimaryKey(TtReplyforum record);
}