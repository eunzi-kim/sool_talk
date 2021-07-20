package com.example.board.dao;

import com.example.board.vo.Tb;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

public interface TbDao {
    public ArrayList<Tb> getAllTb();
}
