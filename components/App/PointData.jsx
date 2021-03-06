// import { useEffect } from "react";
// import { useLazyQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";
// import { DataPointList } from "..";

// import { PageLayout } from "./App.styles";

// export const GET_DATA_POINTS = gql`
//   query DataPoints {
//     dataPoints {
//       id
//       value
//       timestamp
//     }
//   }
// `;

// export default class PointData {

//   const [getDataPoints, { called, loading, error, data }] = useLazyQuery(
//     GET_DATA_POINTS
//   );

//   useEffect(() => {
//     getDataPoints();
//   }, []);

//   if ((called && loading) || !data) {
//     return <PageLayout />;
//   }

//   if (error) {
//     console.log(error);
//     return (
//       <PageLayout>
//         <Message type="error">There was an error. Check the console.</Message>
//       </PageLayout>
//     );
//   }

//   return (
//     <PageLayout>
//       <Title>Ben's Awesome Docker Next App</Title>
//       <DataPointList data={data} />
//     </PageLayout>
//   );
// };

