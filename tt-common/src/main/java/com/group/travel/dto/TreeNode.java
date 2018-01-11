package com.group.travel.dto;

import java.util.List;

/**
 * User: Shinelon
 * Date: 2018/1/9
 * Time: 19:28
 * Version:V1.0
 */
public class TreeNode {
    private Long id;
    private String text;
    private List<TreeNode> nodes;

    public List<TreeNode> getNodes() {
        return nodes;
    }

    public void setNodes(List<TreeNode> nodes) {
        this.nodes = nodes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }


}
