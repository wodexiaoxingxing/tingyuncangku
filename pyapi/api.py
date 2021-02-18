import pymysql
import os
def getcontent():
    # 打开数据库连接
    #conn = pymysql.connect("10.128.1.139", "lens", "nEtop2_18", "druid", charset='utf8')
    conn = pymysql.connect(host="10.128.1.139", user="lens", passwd="nEtop2_18", db="mysql", port=3306)
    #conn = cx_Oracle.connect('abc/abd@192.168.123.456/data123')  # 根据自己的数据库地址进行填写
    cur = conn.cursor()
    # sql = "SELECT name,payload FROM druid_config where 1=1 "
    sql = "SELECT user,host FROM user where 1=1 "
    cur.execute(sql)
    data = cur.fetchall()
    print(data)
    para = []
    for i in data:
        text = {'user': i[0], 'host': i[1]}
        print(text)
        para.append(text)
if __name__ == "__main__":
    getcontent()

