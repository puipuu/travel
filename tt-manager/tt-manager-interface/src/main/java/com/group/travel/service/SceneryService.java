package com.group.travel.service;

        import com.group.travel.pojo.po.TtScenery;

        import java.util.List;

public interface SceneryService {

    List<TtScenery> listScenery();

   // int addScenery(TtScenery scenery,String scenertContent);
   int addScenery(TtScenery scenery);


    int deleteScenery(List<Long> ids);

    TtScenery getSceneryById(Long id);

    int updateScenery(TtScenery scenery);


    int batchUpdate(List<Long> ids, Integer aa);
}
