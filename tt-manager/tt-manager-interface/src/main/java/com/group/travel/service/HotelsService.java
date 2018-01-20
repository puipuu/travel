package com.group.travel.service;

import com.group.travel.pojo.po.TtHotel;
import com.group.travel.pojo.po.TtHotelSupple;
import com.group.travel.pojo.vo.Page;
import com.group.travel.pojo.vo.TtHotelFull;
import com.group.travel.pojo.vo.TtHotelUn;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/9
 * Time: 14:26
 * Version:V1.0
 */
public interface HotelsService {

    TtHotel getHotelsById(Long id);

    List<TtHotelUn> listHotels();

    int saveHotel(TtHotel hotel, String hotelDesc);

   /* int batchUpdate(List<Long> ids);*/

    int updateHotel(TtHotel hotel);

    int updateHotel(TtHotel hotel, TtHotelSupple supple);

    int batchUpdate(List<Long> ids, Integer aa);

    List<TtHotel> listHotelsSerch(TtHotel hotel);

    int saveHotel(TtHotel hotel, String hotelDesc, TtHotelSupple supple);

    List<TtHotelFull> listHotelsByOffset(Long cid,Long areaid,Long current);

    List<TtHotelUn> listHotels(TtHotel hotel);

    Page getPageInfo(Page page);
}
