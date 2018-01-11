package com.group.travel.pojo.po;

import java.util.ArrayList;
import java.util.List;

public class TtSceneryExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TtSceneryExample() {
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

        public Criteria andScenerynameIsNull() {
            addCriterion("sceneryName is null");
            return (Criteria) this;
        }

        public Criteria andScenerynameIsNotNull() {
            addCriterion("sceneryName is not null");
            return (Criteria) this;
        }

        public Criteria andScenerynameEqualTo(String value) {
            addCriterion("sceneryName =", value, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameNotEqualTo(String value) {
            addCriterion("sceneryName <>", value, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameGreaterThan(String value) {
            addCriterion("sceneryName >", value, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameGreaterThanOrEqualTo(String value) {
            addCriterion("sceneryName >=", value, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameLessThan(String value) {
            addCriterion("sceneryName <", value, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameLessThanOrEqualTo(String value) {
            addCriterion("sceneryName <=", value, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameLike(String value) {
            addCriterion("sceneryName like", value, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameNotLike(String value) {
            addCriterion("sceneryName not like", value, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameIn(List<String> values) {
            addCriterion("sceneryName in", values, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameNotIn(List<String> values) {
            addCriterion("sceneryName not in", values, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameBetween(String value1, String value2) {
            addCriterion("sceneryName between", value1, value2, "sceneryname");
            return (Criteria) this;
        }

        public Criteria andScenerynameNotBetween(String value1, String value2) {
            addCriterion("sceneryName not between", value1, value2, "sceneryname");
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

        public Criteria andScnerypriceIsNull() {
            addCriterion("scneryPrice is null");
            return (Criteria) this;
        }

        public Criteria andScnerypriceIsNotNull() {
            addCriterion("scneryPrice is not null");
            return (Criteria) this;
        }

        public Criteria andScnerypriceEqualTo(Long value) {
            addCriterion("scneryPrice =", value, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceNotEqualTo(Long value) {
            addCriterion("scneryPrice <>", value, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceGreaterThan(Long value) {
            addCriterion("scneryPrice >", value, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceGreaterThanOrEqualTo(Long value) {
            addCriterion("scneryPrice >=", value, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceLessThan(Long value) {
            addCriterion("scneryPrice <", value, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceLessThanOrEqualTo(Long value) {
            addCriterion("scneryPrice <=", value, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceIn(List<Long> values) {
            addCriterion("scneryPrice in", values, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceNotIn(List<Long> values) {
            addCriterion("scneryPrice not in", values, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceBetween(Long value1, Long value2) {
            addCriterion("scneryPrice between", value1, value2, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScnerypriceNotBetween(Long value1, Long value2) {
            addCriterion("scneryPrice not between", value1, value2, "scneryprice");
            return (Criteria) this;
        }

        public Criteria andScenerypictureIsNull() {
            addCriterion("sceneryPicture is null");
            return (Criteria) this;
        }

        public Criteria andScenerypictureIsNotNull() {
            addCriterion("sceneryPicture is not null");
            return (Criteria) this;
        }

        public Criteria andScenerypictureEqualTo(String value) {
            addCriterion("sceneryPicture =", value, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureNotEqualTo(String value) {
            addCriterion("sceneryPicture <>", value, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureGreaterThan(String value) {
            addCriterion("sceneryPicture >", value, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureGreaterThanOrEqualTo(String value) {
            addCriterion("sceneryPicture >=", value, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureLessThan(String value) {
            addCriterion("sceneryPicture <", value, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureLessThanOrEqualTo(String value) {
            addCriterion("sceneryPicture <=", value, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureLike(String value) {
            addCriterion("sceneryPicture like", value, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureNotLike(String value) {
            addCriterion("sceneryPicture not like", value, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureIn(List<String> values) {
            addCriterion("sceneryPicture in", values, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureNotIn(List<String> values) {
            addCriterion("sceneryPicture not in", values, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureBetween(String value1, String value2) {
            addCriterion("sceneryPicture between", value1, value2, "scenerypicture");
            return (Criteria) this;
        }

        public Criteria andScenerypictureNotBetween(String value1, String value2) {
            addCriterion("sceneryPicture not between", value1, value2, "scenerypicture");
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