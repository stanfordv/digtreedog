const createRecord = (db, id, value, timestamp) => {
  const p = new Promise((resolve, reject) => {
    const newRecord = { id, value, timestamp };
    console.log( "create - backend - newREcord",process.env.COL_ARCS)
    db.collection(process.env.COL_NAME).insertOne(
      newRecord,
      (error, results) => {
        if (error) {
          reject({ origin: "createRecord", error });
            return;
          }
          resolve(true);
        }
      );
    });
  
    p.catch(error => console.log("Error in createRecord:", error));
    return p;
  };
  
  export default createRecord;