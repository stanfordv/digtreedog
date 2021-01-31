const updateArc = (db, source, dest, weight, primary) => {
    const p = new Promise((resolve, reject) => {
      const newArc = { $set: { source, dest, weight, primary } };
      const query = { dest: dest };
  
      db.collection('Arcs').updateOne(
        query,
        newArc,
        (error, results) => {
          if (error) {
            reject({ origin: "updateArc", error });
            return;
          }
  
          resolve(true);
        }
      );
    });
  
    p.catch(error => console.log("Error in updateArc:", error));
    return p;
  };
  
  export default updateArc;