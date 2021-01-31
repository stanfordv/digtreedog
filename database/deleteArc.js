const createArc = (db, id) => {
    const p = new Promise((resolve, reject) => {
      const filter = { id };
  
      db.collection(process.env.COL_ARCS).deleteOne(filter, (error, results) => {
        if (error) {
          reject({ origin: "createArc", error });
          return;
        }
  
        resolve(true);
      });
    });
  
    p.catch(error => console.log("Error in createArc:", error));
    return p;
  };
  
  export default createArc;
  