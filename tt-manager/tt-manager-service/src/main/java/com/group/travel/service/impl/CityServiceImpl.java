package com.group.travel.service.impl;

import com.group.travel.dao.TtCityAreaExtendMapper;
import com.group.travel.dao.TtCityAreaMapper;
import com.group.travel.dao.TtCityExtendMapper;
import com.group.travel.dao.TtCityMapper;
import com.group.travel.dto.TreeNode;
import com.group.travel.pojo.po.TtCity;
import com.group.travel.pojo.po.TtCityArea;
import com.group.travel.pojo.po.TtCityExample;
import com.group.travel.service.CityService;
import com.group.travel.utils.IDUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/10
 * Time: 11:05
 * Version:V1.0
 */
@Service
public class CityServiceImpl implements CityService{
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TtCityMapper cityDao;
    @Autowired
    private TtCityExtendMapper cityExtendDao;
    @Autowired
    private TtCityAreaMapper cityAreaDao;
    @Autowired
    private TtCityAreaExtendMapper areaExtendDao;

    @Override
    public List<TtCity> listCitys() {
        List<TtCity> list = null;
        try {
            list = cityDao.selectByExample(null);
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @Override
    public List<TreeNode> listCitysByParentId(Long parentId) {
        List<TreeNode> list = new ArrayList<TreeNode>();
        try {
            //创建查询模板
            TtCityExample example = new TtCityExample();
            TtCityExample.Criteria criteria = example.createCriteria();
            Integer a = Integer.valueOf(parentId.toString());
            criteria.andParentidEqualTo(a);
            //执行查询
            List<TtCity> ttCityList = cityDao.selectByExample(example);
            //List<TtCity> ----> List<TreeNode>
            for (TtCity city:ttCityList){
                List<TreeNode> nodes = new ArrayList<TreeNode>();
                TreeNode node = new TreeNode();
                node.setId(city.getId());
                node.setText(city.getName());
                /*TtCityExample example1 = new TtCityExample();
                TtCityExample.Criteria criteria1 = example1.createCriteria();
                criteria1.andParentidEqualTo(Integer.valueOf(city.getId().toString()));
                List<TtCity> ttCityList1 = cityDao.selectByExample(example1);
                for (TtCity city1:ttCityList1){
                    TreeNode node1 = new TreeNode();
                    node1.setId(city1.getId());
                    node1.setText(city1.getName());
                    nodes.add(node1);
                }*/
                if (city.getIsparent() == 1) {
                    nodes = listCitysByParentId(city.getId());
                    node.setNodes(nodes);
                }
                list.add(node);
            }
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<TtCity> listCitysByIsParent() {
        List<TtCity> list = new ArrayList<TtCity>();
        try {
            TtCity ttCity = new TtCity();
            ttCity.setIsparent(0);
            List<TtCity> ttCityList = cityExtendDao.selectByIsParent(ttCity);
            for (TtCity city:ttCityList){
/*                TtCity ttcity = new TtCity();
                ttcity.setId(city.getId());
                ttcity.setName(city.getName());*/
                list.add(city);
            }
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @Transactional
    @Override
    public int addArea(TtCityArea ttCityArea) {
        int i = 0;
        try {
            Long itemId  = IDUtils.getItemId();
            ttCityArea.setId(itemId);
            i = cityAreaDao.insertSelective(ttCityArea);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(i);
        return i;
    }


    @Override
    public List<TtCityArea> listAreaByCid() {
        List<TtCityArea> list = null;
        try {
            list = areaExtendDao.selectByIsParent();
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

    @Override
    public List<TreeNode> listAreaByCid(Long cid) {
        List<TreeNode> list =  new ArrayList<TreeNode>();;
        try {
            TtCityArea area = new TtCityArea();
            area.setCid(cid);
            List<TtCityArea> areas = areaExtendDao.selectByCid(area);
            for (TtCityArea area1:areas
                 ) {
                TreeNode node = new TreeNode();
                node.setId(area1.getId());
                node.setText(area1.getAreaname());
                list.add(node);
            }
        }catch (Exception e){
            logger.error(e.getMessage(),e);
            e.printStackTrace();
        }
        return  list;
    }

/*    public List<TreeNode> listNodes(Long parentId){
        criteria.andParentidEqualTo(Integer.valueOf(city.getId().toString()));
    }*/
}
