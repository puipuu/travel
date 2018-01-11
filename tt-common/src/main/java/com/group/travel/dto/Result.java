package com.group.travel.dto;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/9
 * Time: 14:14
 * Version:V1.0
 */
public class Result<T> {
    private Long total;
    private List<T> rows;

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public List<T> getRows() {
        return rows;
    }

    public void setRows(List<T> rows) {
        this.rows = rows;
    }
}
