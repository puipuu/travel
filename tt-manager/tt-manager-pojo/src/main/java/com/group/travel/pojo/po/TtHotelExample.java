package com.group.travel.pojo.po;

import java.util.ArrayList;
import java.util.List;

public class TtHotelExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TtHotelExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Long value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Long value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Long value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Long value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Long value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Long value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Long> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Long> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Long value1, Long value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Long value1, Long value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andHotelnameIsNull() {
            addCriterion("hotelName is null");
            return (Criteria) this;
        }

        public Criteria andHotelnameIsNotNull() {
            addCriterion("hotelName is not null");
            return (Criteria) this;
        }

        public Criteria andHotelnameEqualTo(String value) {
            addCriterion("hotelName =", value, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameNotEqualTo(String value) {
            addCriterion("hotelName <>", value, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameGreaterThan(String value) {
            addCriterion("hotelName >", value, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameGreaterThanOrEqualTo(String value) {
            addCriterion("hotelName >=", value, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameLessThan(String value) {
            addCriterion("hotelName <", value, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameLessThanOrEqualTo(String value) {
            addCriterion("hotelName <=", value, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameLike(String value) {
            addCriterion("hotelName like", value, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameNotLike(String value) {
            addCriterion("hotelName not like", value, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameIn(List<String> values) {
            addCriterion("hotelName in", values, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameNotIn(List<String> values) {
            addCriterion("hotelName not in", values, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameBetween(String value1, String value2) {
            addCriterion("hotelName between", value1, value2, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHotelnameNotBetween(String value1, String value2) {
            addCriterion("hotelName not between", value1, value2, "hotelname");
            return (Criteria) this;
        }

        public Criteria andHoteladdressIsNull() {
            addCriterion("hotelAddress is null");
            return (Criteria) this;
        }

        public Criteria andHoteladdressIsNotNull() {
            addCriterion("hotelAddress is not null");
            return (Criteria) this;
        }

        public Criteria andHoteladdressEqualTo(String value) {
            addCriterion("hotelAddress =", value, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressNotEqualTo(String value) {
            addCriterion("hotelAddress <>", value, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressGreaterThan(String value) {
            addCriterion("hotelAddress >", value, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressGreaterThanOrEqualTo(String value) {
            addCriterion("hotelAddress >=", value, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressLessThan(String value) {
            addCriterion("hotelAddress <", value, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressLessThanOrEqualTo(String value) {
            addCriterion("hotelAddress <=", value, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressLike(String value) {
            addCriterion("hotelAddress like", value, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressNotLike(String value) {
            addCriterion("hotelAddress not like", value, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressIn(List<String> values) {
            addCriterion("hotelAddress in", values, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressNotIn(List<String> values) {
            addCriterion("hotelAddress not in", values, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressBetween(String value1, String value2) {
            addCriterion("hotelAddress between", value1, value2, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andHoteladdressNotBetween(String value1, String value2) {
            addCriterion("hotelAddress not between", value1, value2, "hoteladdress");
            return (Criteria) this;
        }

        public Criteria andCityidIsNull() {
            addCriterion("cityId is null");
            return (Criteria) this;
        }

        public Criteria andCityidIsNotNull() {
            addCriterion("cityId is not null");
            return (Criteria) this;
        }

        public Criteria andCityidEqualTo(Long value) {
            addCriterion("cityId =", value, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidNotEqualTo(Long value) {
            addCriterion("cityId <>", value, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidGreaterThan(Long value) {
            addCriterion("cityId >", value, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidGreaterThanOrEqualTo(Long value) {
            addCriterion("cityId >=", value, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidLessThan(Long value) {
            addCriterion("cityId <", value, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidLessThanOrEqualTo(Long value) {
            addCriterion("cityId <=", value, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidIn(List<Long> values) {
            addCriterion("cityId in", values, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidNotIn(List<Long> values) {
            addCriterion("cityId not in", values, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidBetween(Long value1, Long value2) {
            addCriterion("cityId between", value1, value2, "cityid");
            return (Criteria) this;
        }

        public Criteria andCityidNotBetween(Long value1, Long value2) {
            addCriterion("cityId not between", value1, value2, "cityid");
            return (Criteria) this;
        }

        public Criteria andHotelpriceIsNull() {
            addCriterion("hotelPrice is null");
            return (Criteria) this;
        }

        public Criteria andHotelpriceIsNotNull() {
            addCriterion("hotelPrice is not null");
            return (Criteria) this;
        }

        public Criteria andHotelpriceEqualTo(Long value) {
            addCriterion("hotelPrice =", value, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceNotEqualTo(Long value) {
            addCriterion("hotelPrice <>", value, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceGreaterThan(Long value) {
            addCriterion("hotelPrice >", value, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceGreaterThanOrEqualTo(Long value) {
            addCriterion("hotelPrice >=", value, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceLessThan(Long value) {
            addCriterion("hotelPrice <", value, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceLessThanOrEqualTo(Long value) {
            addCriterion("hotelPrice <=", value, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceIn(List<Long> values) {
            addCriterion("hotelPrice in", values, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceNotIn(List<Long> values) {
            addCriterion("hotelPrice not in", values, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceBetween(Long value1, Long value2) {
            addCriterion("hotelPrice between", value1, value2, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpriceNotBetween(Long value1, Long value2) {
            addCriterion("hotelPrice not between", value1, value2, "hotelprice");
            return (Criteria) this;
        }

        public Criteria andHotelpictureIsNull() {
            addCriterion("hotelPicture is null");
            return (Criteria) this;
        }

        public Criteria andHotelpictureIsNotNull() {
            addCriterion("hotelPicture is not null");
            return (Criteria) this;
        }

        public Criteria andHotelpictureEqualTo(String value) {
            addCriterion("hotelPicture =", value, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureNotEqualTo(String value) {
            addCriterion("hotelPicture <>", value, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureGreaterThan(String value) {
            addCriterion("hotelPicture >", value, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureGreaterThanOrEqualTo(String value) {
            addCriterion("hotelPicture >=", value, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureLessThan(String value) {
            addCriterion("hotelPicture <", value, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureLessThanOrEqualTo(String value) {
            addCriterion("hotelPicture <=", value, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureLike(String value) {
            addCriterion("hotelPicture like", value, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureNotLike(String value) {
            addCriterion("hotelPicture not like", value, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureIn(List<String> values) {
            addCriterion("hotelPicture in", values, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureNotIn(List<String> values) {
            addCriterion("hotelPicture not in", values, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureBetween(String value1, String value2) {
            addCriterion("hotelPicture between", value1, value2, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelpictureNotBetween(String value1, String value2) {
            addCriterion("hotelPicture not between", value1, value2, "hotelpicture");
            return (Criteria) this;
        }

        public Criteria andHotelleveIsNull() {
            addCriterion("hotelleve is null");
            return (Criteria) this;
        }

        public Criteria andHotelleveIsNotNull() {
            addCriterion("hotelleve is not null");
            return (Criteria) this;
        }

        public Criteria andHotelleveEqualTo(Integer value) {
            addCriterion("hotelleve =", value, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveNotEqualTo(Integer value) {
            addCriterion("hotelleve <>", value, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveGreaterThan(Integer value) {
            addCriterion("hotelleve >", value, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveGreaterThanOrEqualTo(Integer value) {
            addCriterion("hotelleve >=", value, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveLessThan(Integer value) {
            addCriterion("hotelleve <", value, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveLessThanOrEqualTo(Integer value) {
            addCriterion("hotelleve <=", value, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveIn(List<Integer> values) {
            addCriterion("hotelleve in", values, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveNotIn(List<Integer> values) {
            addCriterion("hotelleve not in", values, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveBetween(Integer value1, Integer value2) {
            addCriterion("hotelleve between", value1, value2, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andHotelleveNotBetween(Integer value1, Integer value2) {
            addCriterion("hotelleve not between", value1, value2, "hotelleve");
            return (Criteria) this;
        }

        public Criteria andCidIsNull() {
            addCriterion("cid is null");
            return (Criteria) this;
        }

        public Criteria andCidIsNotNull() {
            addCriterion("cid is not null");
            return (Criteria) this;
        }

        public Criteria andCidEqualTo(Integer value) {
            addCriterion("cid =", value, "cid");
            return (Criteria) this;
        }

        public Criteria andCidNotEqualTo(Integer value) {
            addCriterion("cid <>", value, "cid");
            return (Criteria) this;
        }

        public Criteria andCidGreaterThan(Integer value) {
            addCriterion("cid >", value, "cid");
            return (Criteria) this;
        }

        public Criteria andCidGreaterThanOrEqualTo(Integer value) {
            addCriterion("cid >=", value, "cid");
            return (Criteria) this;
        }

        public Criteria andCidLessThan(Integer value) {
            addCriterion("cid <", value, "cid");
            return (Criteria) this;
        }

        public Criteria andCidLessThanOrEqualTo(Integer value) {
            addCriterion("cid <=", value, "cid");
            return (Criteria) this;
        }

        public Criteria andCidIn(List<Integer> values) {
            addCriterion("cid in", values, "cid");
            return (Criteria) this;
        }

        public Criteria andCidNotIn(List<Integer> values) {
            addCriterion("cid not in", values, "cid");
            return (Criteria) this;
        }

        public Criteria andCidBetween(Integer value1, Integer value2) {
            addCriterion("cid between", value1, value2, "cid");
            return (Criteria) this;
        }

        public Criteria andCidNotBetween(Integer value1, Integer value2) {
            addCriterion("cid not between", value1, value2, "cid");
            return (Criteria) this;
        }

        public Criteria andStatusIsNull() {
            addCriterion("status is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("status is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(Integer value) {
            addCriterion("status =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(Integer value) {
            addCriterion("status <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(Integer value) {
            addCriterion("status >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("status >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(Integer value) {
            addCriterion("status <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(Integer value) {
            addCriterion("status <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<Integer> values) {
            addCriterion("status in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<Integer> values) {
            addCriterion("status not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(Integer value1, Integer value2) {
            addCriterion("status between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("status not between", value1, value2, "status");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}