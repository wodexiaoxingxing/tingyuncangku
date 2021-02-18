# -*- coding: UTF-8 -*-
# import scipy.io as sio
import pymysql
import os
import json
from myEncoder import MyEncoder
from flask_cors import *
from flask import Flask,make_response
os.environ['NLS_LANG'] = 'SIMPLIFIED CHINESE_CHINA.UTF8'
from flask import Flask, request
app = Flask(__name__)
@app.route('/index1', methods=['POST'])
#从数据库读取数据的接口
# def getcontent():
#    # conn = pymysql.connect('abc/abd@192.168.123.456/data123')
#     conn = pymysql.connect(host="10.128.1.139", user="lens", passwd="nEtop2_18", db="mysql", port=3306)
#     cur = conn.cursor()
#     # sql = "SELECT name,payload FROM druid_config where 1=1 "
#     sql = "SELECT user,host FROM user where 1=1 "
#     cur.execute(sql)
#     data = cur.fetchall()
#     # print(data)
#     para = []
#     for i in data:
#         text = {'user': i[0], 'host': i[1]}
#         # print(text)
#         para.append(text)
#     return json.dumps(para, cls=MyEncoder, indent=4)

def login():
    a={'name':'yuanjie'}
    res = make_response(a)  # 设置响应体
    res.status = '200'  # 设置状态码
    res.headers['token'] = "123456"  # 设置响应头
    res.headers['Access-Control-Allow-Origin'] = "*"  # 设置响应头
    return res
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000,debug=True)
