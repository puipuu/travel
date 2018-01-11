package com.group.travel.dao;

import com.group.travel.pojo.po.TtForum;
import com.group.travel.pojo.po.TtForumExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TtForumMapper {
    int countByExample(TtForumExample example);

    int deleteByExample(TtForumExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TtForum record);

    int insertSelective(TtForum record);

    List<TtForum> selectByExampleWithBLOBs(TtForumExample example);

    List<TtForum> selectByExample(TtForumExample example);

    TtForum selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TtForum record, @Param("example") TtForumExample example);

    int updateByExampleWithBLOBs(@Param("record") TtForum record, @Param("example") TtForumExample example);

    int updateByExample(@Param("record") TtForum record, @Param("example") TtForumExample example);

    int updateByPrimaryKeySelective(TtForum record);

    int updateByPrimaryKeyWithBLOBs(TtForum record);

    int updateByPrimaryKey(TtForum record);
}