mongo --host p_session/localhost:27018, localhost:27019, localhost:27020

ps -ef | grep mongod

kill PROCESS_ID

mongod --replSet p_session --logpath 'rs1.log' --dbpath rs1 --port 27018 --fork



rs.remove('localhost:27018');