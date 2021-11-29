config = {"_id":"p_session","members":[{"_id":0,"host":"localhost:27018"},{"_id":1,"host":"localhost:27019"},{"_id":2,"host":"localhost:27020"}]}

rs.initiate(config);

rs.status();

rs.secondaryOk()

db.getMongo().setReadPref('secondary')
