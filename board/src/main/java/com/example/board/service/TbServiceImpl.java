package com.example.board.service;

import com.example.board.dao.TbDao;
import com.example.board.vo.Tb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TbServiceImpl implements TbService{

    @Autowired
    TbDao dao;

    @Override
    public ArrayList<Tb> getAllTb() {
        return dao.getAllTb();
    }
}
