package com.group.travel.service;

import com.group.travel.pojo.po.TtHotel;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/9
 * Time: 14:26
 * Version:V1.0
 */
public interface HotelsService {

    TtHotel getHotelsById(Long id);

    List<TtHotel> listHotels();

    int saveHotel(TtHotel hotel, String hotelDesc);

   /* int batchUpdate(List<Long> ids);*/

    int updateHotel(TtHotel hotel);

    int batchUpdate(List<Long> ids, Integer aa);

    List<TtHotel> listHotelsSerch(TtHotel hotel);
}
