// import { useState, useEffect, useRef } from "react";
// import { useMutation } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";

// import { GET_ARCS } from "../App/App";

// // import { Point, Editable, Text, DeleteButton } from "./DataPoint.styles";
// import styles from './Arc.module.css'

// const CREATE_ARC = gql`
//   mutation CreateArc($source: String!, $dest: String!, $weight: String!, $primary: Boolean!) {
//     createArc( source: $source, dest: $dest, weight: $weight, primary: $primary) {
//       source 
//       dest 
//       weight 
//       primary
//     }
//   }
// `;

// const SET_ARC = gql`
//   mutation UpdateArc( $source: String!, $dest: String!, $weight: String!, $primary: Boolean!) {
//     updateArc( source: $source, dest: $dest, weight: $weight, primary: $primary){
//       source 
//       dest 
//       weight 
//       primary
//     }
//   }
// `;

// const DELETE_ARC = gql`
//   mutation DeleteArc($dest: String!) {
//     deleteArc(dest: $String) {
//       dest
//     }
//   }
// `;

// const Arc = ({ source, dest, weight, primary }) => {

//   const arcObject={'source':source, 'dest':dest, 'weight':weight, 'primary':primary}
//   const [arcValue, setArcValue] = useState(arcObject);
//   const oldValue = useRef(arcValue);
  

//   const updateCacheCreate = (
//     cache,
//     {
//         arcs: { source, dest, weight, primary }
//     }
//   ) => {
//     const { arcs } = cache.readQuery({
//       query: GET_ARCS,
//     });

//     const updatedArc = [
//       ...arcs,
//       { source, dest, weight, primary, __typename: "Arcs" },
//     ];

//     cache.writeQuery({
//       query: GET_ARCS,
//       arcs: { source: source, dest: dest, weight:weight, primary: primary },
//     });
//   };

//   const updateCacheDelete = (
//     cache,
//     {
//       data: {
//         deleteArc: { dest },
//       },
//     }
//   ) => {
//     const { arcs} = cache.readQuery({
//       query: GET_ARCS,
//     });

//     const updatedArc = arcs.reduce((a, b) => {
//       if (b.dest === dest) return a;

//       const newItem = b;
//       return [...a, newItem];
//     }, []);

//     cache.writeQuery({
//       query: GET_ARCS,
//       data: { arcs: updateArc },
//     });
//   };

//   const [createArc, { data: createData }] = useMutation(
//     CREATE_ARC,
//     {
//       update: updateCacheCreate,
//     }
//   );

//   const [updateArc, { data: updateData }] = useMutation(SET_ARC);

//   const [deleteArc, { data: deleteData }] = useMutation(
//     DELETE_ARC,
//     { update: updateCacheDelete }
//   );

//   const onKeyPress = e => {
//     setArcValue(e.target.value);
//   };

//   const saveChange = e => {
  
//     if (oldValue.current === arcValue) return;
//     if (arcValue === "") return;

//     if (oldValue.current === "") {
//       createArc({
//         variables: { source: source, dest: dest, weight:weight, primary: primary },
//       });
//       return;
//     }

   
//     updateArc({
//       variables: { source: source, dest: dest, weight:weight, primary: primary },
//     });

//     oldValue.current = arcValue;
//   };


//   const deleteItem = () => {
//     if (arcValue === "") return;

//     deleteArc({ variables: { id } });
//   };

//   return (
//     <div className={styles.point}>
//       <div className={styles.text}>Dest: {dest}</div>
//       <input className={styles.editable}
//         type="number"
//         value={dest}
//         onChange={onKeyPress}
//         onBlur={saveChange}
//       />
//       <button className={styles.deleteButton} onClick={deleteItem}>✗</button>
//     </div>
//   );
// };

// export default Arc;
