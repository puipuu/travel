package com.group.travel.pojo.po;

import java.util.ArrayList;
import java.util.List;

public class TtTravelgroupExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TtTravelgroupExample() {
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

        public Criteria andTitleIsNull() {
            addCriterion("title is null");
            return (Criteria) this;
        }

        public Criteria andTitleIsNotNull() {
            addCriterion("title is not null");
            return (Criteria) this;
        }

        public Criteria andTitleEqualTo(String value) {
            addCriterion("title =", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotEqualTo(String value) {
            addCriterion("title <>", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleGreaterThan(String value) {
            addCriterion("title >", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleGreaterThanOrEqualTo(String value) {
            addCriterion("title >=", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLessThan(String value) {
            addCriterion("title <", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLessThanOrEqualTo(String value) {
            addCriterion("title <=", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLike(String value) {
            addCriterion("title like", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotLike(String value) {
            addCriterion("title not like", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleIn(List<String> values) {
            addCriterion("title in", values, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotIn(List<String> values) {
            addCriterion("title not in", values, "title");
            return (Criteria) this;
        }

        public Criteria andTitleBetween(String value1, String value2) {
            addCriterion("title between", value1, value2, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotBetween(String value1, String value2) {
            addCriterion("title not between", value1, value2, "title");
            return (Criteria) this;
        }

        public Criteria andStartplaceIsNull() {
            addCriterion("startPlace is null");
            return (Criteria) this;
        }

        public Criteria andStartplaceIsNotNull() {
            addCriterion("startPlace is not null");
            return (Criteria) this;
        }

        public Criteria andStartplaceEqualTo(String value) {
            addCriterion("startPlace =", value, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceNotEqualTo(String value) {
            addCriterion("startPlace <>", value, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceGreaterThan(String value) {
            addCriterion("startPlace >", value, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceGreaterThanOrEqualTo(String value) {
            addCriterion("startPlace >=", value, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceLessThan(String value) {
            addCriterion("startPlace <", value, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceLessThanOrEqualTo(String value) {
            addCriterion("startPlace <=", value, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceLike(String value) {
            addCriterion("startPlace like", value, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceNotLike(String value) {
            addCriterion("startPlace not like", value, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceIn(List<String> values) {
            addCriterion("startPlace in", values, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceNotIn(List<String> values) {
            addCriterion("startPlace not in", values, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceBetween(String value1, String value2) {
            addCriterion("startPlace between", value1, value2, "startplace");
            return (Criteria) this;
        }

        public Criteria andStartplaceNotBetween(String value1, String value2) {
            addCriterion("startPlace not between", value1, value2, "startplace");
            return (Criteria) this;
        }

        public Criteria andDestinationIsNull() {
            addCriterion("destination is null");
            return (Criteria) this;
        }

        public Criteria andDestinationIsNotNull() {
            addCriterion("destination is not null");
            return (Criteria) this;
        }

        public Criteria andDestinationEqualTo(String value) {
            addCriterion("destination =", value, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationNotEqualTo(String value) {
            addCriterion("destination <>", value, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationGreaterThan(String value) {
            addCriterion("destination >", value, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationGreaterThanOrEqualTo(String value) {
            addCriterion("destination >=", value, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationLessThan(String value) {
            addCriterion("destination <", value, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationLessThanOrEqualTo(String value) {
            addCriterion("destination <=", value, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationLike(String value) {
            addCriterion("destination like", value, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationNotLike(String value) {
            addCriterion("destination not like", value, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationIn(List<String> values) {
            addCriterion("destination in", values, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationNotIn(List<String> values) {
            addCriterion("destination not in", values, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationBetween(String value1, String value2) {
            addCriterion("destination between", value1, value2, "destination");
            return (Criteria) this;
        }

        public Criteria andDestinationNotBetween(String value1, String value2) {
            addCriterion("destination not between", value1, value2, "destination");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceIsNull() {
            addCriterion("travelGroupPrice is null");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceIsNotNull() {
            addCriterion("travelGroupPrice is not null");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceEqualTo(Long value) {
            addCriterion("travelGroupPrice =", value, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceNotEqualTo(Long value) {
            addCriterion("travelGroupPrice <>", value, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceGreaterThan(Long value) {
            addCriterion("travelGroupPrice >", value, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceGreaterThanOrEqualTo(Long value) {
            addCriterion("travelGroupPrice >=", value, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceLessThan(Long value) {
            addCriterion("travelGroupPrice <", value, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceLessThanOrEqualTo(Long value) {
            addCriterion("travelGroupPrice <=", value, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceIn(List<Long> values) {
            addCriterion("travelGroupPrice in", values, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceNotIn(List<Long> values) {
            addCriterion("travelGroupPrice not in", values, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceBetween(Long value1, Long value2) {
            addCriterion("travelGroupPrice between", value1, value2, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTravelgrouppriceNotBetween(Long value1, Long value2) {
            addCriterion("travelGroupPrice not between", value1, value2, "travelgroupprice");
            return (Criteria) this;
        }

        public Criteria andTraveldayIsNull() {
            addCriterion("travelDay is null");
            return (Criteria) this;
        }

        public Criteria andTraveldayIsNotNull() {
            addCriterion("travelDay is not null");
            return (Criteria) this;
        }

        public Criteria andTraveldayEqualTo(Integer value) {
            addCriterion("travelDay =", value, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayNotEqualTo(Integer value) {
            addCriterion("travelDay <>", value, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayGreaterThan(Integer value) {
            addCriterion("travelDay >", value, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayGreaterThanOrEqualTo(Integer value) {
            addCriterion("travelDay >=", value, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayLessThan(Integer value) {
            addCriterion("travelDay <", value, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayLessThanOrEqualTo(Integer value) {
            addCriterion("travelDay <=", value, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayIn(List<Integer> values) {
            addCriterion("travelDay in", values, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayNotIn(List<Integer> values) {
            addCriterion("travelDay not in", values, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayBetween(Integer value1, Integer value2) {
            addCriterion("travelDay between", value1, value2, "travelday");
            return (Criteria) this;
        }

        public Criteria andTraveldayNotBetween(Integer value1, Integer value2) {
            addCriterion("travelDay not between", value1, value2, "travelday");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureIsNull() {
            addCriterion("travelFeature is null");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureIsNotNull() {
            addCriterion("travelFeature is not null");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureEqualTo(String value) {
            addCriterion("travelFeature =", value, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureNotEqualTo(String value) {
            addCriterion("travelFeature <>", value, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureGreaterThan(String value) {
            addCriterion("travelFeature >", value, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureGreaterThanOrEqualTo(String value) {
            addCriterion("travelFeature >=", value, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureLessThan(String value) {
            addCriterion("travelFeature <", value, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureLessThanOrEqualTo(String value) {
            addCriterion("travelFeature <=", value, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureLike(String value) {
            addCriterion("travelFeature like", value, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureNotLike(String value) {
            addCriterion("travelFeature not like", value, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureIn(List<String> values) {
            addCriterion("travelFeature in", values, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureNotIn(List<String> values) {
            addCriterion("travelFeature not in", values, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureBetween(String value1, String value2) {
            addCriterion("travelFeature between", value1, value2, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andTravelfeatureNotBetween(String value1, String value2) {
            addCriterion("travelFeature not between", value1, value2, "travelfeature");
            return (Criteria) this;
        }

        public Criteria andIsdiscountIsNull() {
            addCriterion("isDiscount is null");
            return (Criteria) this;
        }

        public Criteria andIsdiscountIsNotNull() {
            addCriterion("isDiscount is not null");
            return (Criteria) this;
        }

        public Criteria andIsdiscountEqualTo(Integer value) {
            addCriterion("isDiscount =", value, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountNotEqualTo(Integer value) {
            addCriterion("isDiscount <>", value, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountGreaterThan(Integer value) {
            addCriterion("isDiscount >", value, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountGreaterThanOrEqualTo(Integer value) {
            addCriterion("isDiscount >=", value, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountLessThan(Integer value) {
            addCriterion("isDiscount <", value, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountLessThanOrEqualTo(Integer value) {
            addCriterion("isDiscount <=", value, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountIn(List<Integer> values) {
            addCriterion("isDiscount in", values, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountNotIn(List<Integer> values) {
            addCriterion("isDiscount not in", values, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountBetween(Integer value1, Integer value2) {
            addCriterion("isDiscount between", value1, value2, "isdiscount");
            return (Criteria) this;
        }

        public Criteria andIsdiscountNotBetween(Integer value1, Integer value2) {
            addCriterion("isDiscount not between", value1, value2, "isdiscount");
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