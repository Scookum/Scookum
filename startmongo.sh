#!/bin/bash
top=$(cd $(dirname $0);pwd);
database=$top/mongodata
if [ ! -d $database ];then
  mkdir $database
fi

mongod --dbpath $database

