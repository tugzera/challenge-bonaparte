#!/usr/bin/python3
# -*- coding: utf-8 -*-
import mysql.connector
import pandas as pd
import os

file_basic = pd.read_csv('title.basics.tsv', sep='\t', chunksize=50)
for row in file_basic:
    row.to_csv('title_basics.csv', sep=';', mode='a')

file_basic = pd.read_csv('title.ratings.tsv', sep='\t', chunksize=50)
for row in file_basic:
    row.to_csv('title_ratings.csv', sep=';', mode='a')

mydb = mysql.connector.connect(
    host="localhost",
    user="docker",
    password="docker",
    database="docker"
)

mycursor = mydb.cursor()

try:
    mycursor.execute(f"""LOAD DATA LOCAL INFILE 'title_basics.csv' INTO TABLE titles FIELDS 
TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES;""")
    mydb.commit()
    # IGNORE 1 LINES not working... so delete the wrong data
    mycursor.execute(f"""DELETE FROM titles WHERE code= 'id'""")
    mydb.commit()
except Exception as error:
    print(error)

try:
    mycursor.execute(f"""LOAD DATA LOCAL INFILE 'title_ratings.csv' INTO TABLE ratings FIELDS
TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 LINES;""")
    mydb.commit()
except Exception as error:
    print(error)
