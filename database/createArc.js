const createArc = (db, source, dest, weight, primary) => {
    const p = new Promise((resolve, reject) => {
      const newArc = { source, dest, weight, primary };
  console.log("newArc", newArc)
      db.collection("Arcs").insertOne(
        newArc,
        (error, results) => {
          if (error) {
            reject({ origin: "createArc", error });
            return;
          }
          resolve(true);
        }
      );
    });
  
    p.catch(error => console.log("Error in createArc:", error));
    return p;
  };
  
  export default createArc;