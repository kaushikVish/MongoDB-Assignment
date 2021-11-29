mkdir rs1 rs2 rs3

mongod --replSet p_session --logpath 'rs1.log' --dbpath rs1 --port 27018 &
mongod --replSet p_session --logpath 'rs2.log' --dbpath rs2 --port 27019 &
mongod --replSet p_session --logpath 'rs3.log' --dbpath rs3 --port 27020 &

