package com.group.travel.pojo.po;

import java.util.Date;

public class TtReplyforum {
    private Long id;

    private String author;

    private Date replytime;

    private Long forumid;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author == null ? null : author.trim();
    }

    public Date getReplytime() {
        return replytime;
    }

    public void setReplytime(Date replytime) {
        this.replytime = replytime;
    }

    public Long getForumid() {
        return forumid;
    }

    public void setForumid(Long forumid) {
        this.forumid = forumid;
    }
}