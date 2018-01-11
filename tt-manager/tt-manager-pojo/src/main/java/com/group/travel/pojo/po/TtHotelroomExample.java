package com.group.travel.pojo.po;

import java.util.ArrayList;
import java.util.List;

public class TtHotelroomExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TtHotelroomExample() {
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

        public Criteria andHotelidIsNull() {
            addCriterion("hotelId is null");
            return (Criteria) this;
        }

        public Criteria andHotelidIsNotNull() {
            addCriterion("hotelId is not null");
            return (Criteria) this;
        }

        public Criteria andHotelidEqualTo(Long value) {
            addCriterion("hotelId =", value, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidNotEqualTo(Long value) {
            addCriterion("hotelId <>", value, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidGreaterThan(Long value) {
            addCriterion("hotelId >", value, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidGreaterThanOrEqualTo(Long value) {
            addCriterion("hotelId >=", value, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidLessThan(Long value) {
            addCriterion("hotelId <", value, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidLessThanOrEqualTo(Long value) {
            addCriterion("hotelId <=", value, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidIn(List<Long> values) {
            addCriterion("hotelId in", values, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidNotIn(List<Long> values) {
            addCriterion("hotelId not in", values, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidBetween(Long value1, Long value2) {
            addCriterion("hotelId between", value1, value2, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelidNotBetween(Long value1, Long value2) {
            addCriterion("hotelId not between", value1, value2, "hotelid");
            return (Criteria) this;
        }

        public Criteria andHotelstyleIsNull() {
            addCriterion("hotelStyle is null");
            return (Criteria) this;
        }

        public Criteria andHotelstyleIsNotNull() {
            addCriterion("hotelStyle is not null");
            return (Criteria) this;
        }

        public Criteria andHotelstyleEqualTo(Integer value) {
            addCriterion("hotelStyle =", value, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleNotEqualTo(Integer value) {
            addCriterion("hotelStyle <>", value, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleGreaterThan(Integer value) {
            addCriterion("hotelStyle >", value, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleGreaterThanOrEqualTo(Integer value) {
            addCriterion("hotelStyle >=", value, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleLessThan(Integer value) {
            addCriterion("hotelStyle <", value, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleLessThanOrEqualTo(Integer value) {
            addCriterion("hotelStyle <=", value, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleIn(List<Integer> values) {
            addCriterion("hotelStyle in", values, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleNotIn(List<Integer> values) {
            addCriterion("hotelStyle not in", values, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleBetween(Integer value1, Integer value2) {
            addCriterion("hotelStyle between", value1, value2, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andHotelstyleNotBetween(Integer value1, Integer value2) {
            addCriterion("hotelStyle not between", value1, value2, "hotelstyle");
            return (Criteria) this;
        }

        public Criteria andPeoplennumIsNull() {
            addCriterion("peoplenNum is null");
            return (Criteria) this;
        }

        public Criteria andPeoplennumIsNotNull() {
            addCriterion("peoplenNum is not null");
            return (Criteria) this;
        }

        public Criteria andPeoplennumEqualTo(Integer value) {
            addCriterion("peoplenNum =", value, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumNotEqualTo(Integer value) {
            addCriterion("peoplenNum <>", value, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumGreaterThan(Integer value) {
            addCriterion("peoplenNum >", value, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumGreaterThanOrEqualTo(Integer value) {
            addCriterion("peoplenNum >=", value, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumLessThan(Integer value) {
            addCriterion("peoplenNum <", value, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumLessThanOrEqualTo(Integer value) {
            addCriterion("peoplenNum <=", value, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumIn(List<Integer> values) {
            addCriterion("peoplenNum in", values, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumNotIn(List<Integer> values) {
            addCriterion("peoplenNum not in", values, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumBetween(Integer value1, Integer value2) {
            addCriterion("peoplenNum between", value1, value2, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andPeoplennumNotBetween(Integer value1, Integer value2) {
            addCriterion("peoplenNum not between", value1, value2, "peoplennum");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceIsNull() {
            addCriterion("hotelRoomPrice is null");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceIsNotNull() {
            addCriterion("hotelRoomPrice is not null");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceEqualTo(Long value) {
            addCriterion("hotelRoomPrice =", value, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceNotEqualTo(Long value) {
            addCriterion("hotelRoomPrice <>", value, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceGreaterThan(Long value) {
            addCriterion("hotelRoomPrice >", value, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceGreaterThanOrEqualTo(Long value) {
            addCriterion("hotelRoomPrice >=", value, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceLessThan(Long value) {
            addCriterion("hotelRoomPrice <", value, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceLessThanOrEqualTo(Long value) {
            addCriterion("hotelRoomPrice <=", value, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceIn(List<Long> values) {
            addCriterion("hotelRoomPrice in", values, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceNotIn(List<Long> values) {
            addCriterion("hotelRoomPrice not in", values, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceBetween(Long value1, Long value2) {
            addCriterion("hotelRoomPrice between", value1, value2, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andHotelroompriceNotBetween(Long value1, Long value2) {
            addCriterion("hotelRoomPrice not between", value1, value2, "hotelroomprice");
            return (Criteria) this;
        }

        public Criteria andRoomnumIsNull() {
            addCriterion("roomNum is null");
            return (Criteria) this;
        }

        public Criteria andRoomnumIsNotNull() {
            addCriterion("roomNum is not null");
            return (Criteria) this;
        }

        public Criteria andRoomnumEqualTo(Integer value) {
            addCriterion("roomNum =", value, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumNotEqualTo(Integer value) {
            addCriterion("roomNum <>", value, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumGreaterThan(Integer value) {
            addCriterion("roomNum >", value, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumGreaterThanOrEqualTo(Integer value) {
            addCriterion("roomNum >=", value, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumLessThan(Integer value) {
            addCriterion("roomNum <", value, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumLessThanOrEqualTo(Integer value) {
            addCriterion("roomNum <=", value, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumIn(List<Integer> values) {
            addCriterion("roomNum in", values, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumNotIn(List<Integer> values) {
            addCriterion("roomNum not in", values, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumBetween(Integer value1, Integer value2) {
            addCriterion("roomNum between", value1, value2, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoomnumNotBetween(Integer value1, Integer value2) {
            addCriterion("roomNum not between", value1, value2, "roomnum");
            return (Criteria) this;
        }

        public Criteria andRoompictureIsNull() {
            addCriterion("roomPicture is null");
            return (Criteria) this;
        }

        public Criteria andRoompictureIsNotNull() {
            addCriterion("roomPicture is not null");
            return (Criteria) this;
        }

        public Criteria andRoompictureEqualTo(String value) {
            addCriterion("roomPicture =", value, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureNotEqualTo(String value) {
            addCriterion("roomPicture <>", value, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureGreaterThan(String value) {
            addCriterion("roomPicture >", value, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureGreaterThanOrEqualTo(String value) {
            addCriterion("roomPicture >=", value, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureLessThan(String value) {
            addCriterion("roomPicture <", value, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureLessThanOrEqualTo(String value) {
            addCriterion("roomPicture <=", value, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureLike(String value) {
            addCriterion("roomPicture like", value, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureNotLike(String value) {
            addCriterion("roomPicture not like", value, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureIn(List<String> values) {
            addCriterion("roomPicture in", values, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureNotIn(List<String> values) {
            addCriterion("roomPicture not in", values, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureBetween(String value1, String value2) {
            addCriterion("roomPicture between", value1, value2, "roompicture");
            return (Criteria) this;
        }

        public Criteria andRoompictureNotBetween(String value1, String value2) {
            addCriterion("roomPicture not between", value1, value2, "roompicture");
            return (Criteria) this;
        }

        public Criteria andStandardidIsNull() {
            addCriterion("standardId is null");
            return (Criteria) this;
        }

        public Criteria andStandardidIsNotNull() {
            addCriterion("standardId is not null");
            return (Criteria) this;
        }

        public Criteria andStandardidEqualTo(Integer value) {
            addCriterion("standardId =", value, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidNotEqualTo(Integer value) {
            addCriterion("standardId <>", value, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidGreaterThan(Integer value) {
            addCriterion("standardId >", value, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidGreaterThanOrEqualTo(Integer value) {
            addCriterion("standardId >=", value, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidLessThan(Integer value) {
            addCriterion("standardId <", value, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidLessThanOrEqualTo(Integer value) {
            addCriterion("standardId <=", value, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidIn(List<Integer> values) {
            addCriterion("standardId in", values, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidNotIn(List<Integer> values) {
            addCriterion("standardId not in", values, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidBetween(Integer value1, Integer value2) {
            addCriterion("standardId between", value1, value2, "standardid");
            return (Criteria) this;
        }

        public Criteria andStandardidNotBetween(Integer value1, Integer value2) {
            addCriterion("standardId not between", value1, value2, "standardid");
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