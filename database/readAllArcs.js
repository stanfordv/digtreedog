const readAllArcs = db => {
    const p = new Promise((resolve, reject) => {
      db.collection(process.env.COL_ARCS)
        .find({})
        .toArray((error, results) => {
          if (error) {
            reject({ origin: "readAllArcs", error });
            return;
          }
  
          resolve(results);
        });
    });
  
    p.catch(error => console.log("Error in readAllArcs:", error));

    console.log("p", p)
    return p;
  };
  
  export default readAllArcs;