import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { DataPointList } from "../";
//import { Arcs } from "../";

import { PageLayout, Title, Message } from "./App.styles";

export const GET_DATA_POINTS = gql`
  query DataPoints {
    dataPoints {
      id
      value
      timestamp
    }
  }
`;

export const GET_ARCS = gql`
  query Arcs {
    arcs {
      dest
      source
      weight
      primary
    }
  }
`;

const App = () => {

  let [getDataPoints, { called, loading, error, data }] = useLazyQuery(
    GET_DATA_POINTS
  );
  
  useEffect(() => {
    getDataPoints();
  }, []);

  if ((called && loading) || !data) {
    return <PageLayout />;
  }

  if (error) {
    console.log(error);
    return (
      <PageLayout>
        <Message type="error">There was an error. Check the console.</Message>
      </PageLayout>
    );
  }


  // const [getArcs, { called, loading, error, data }] = useLazyQuery(
  //   GET_ARCS
  // );

  // useEffect(() => {
  //   getArcs();
  // }, []);

  // if ((called && loading) || !data) {
  //   return <PageLayout />;
  // }

  // if (error) {
  //   console.log(error);
  //   return (
  //     <PageLayout>
  //       <Message type="error">There was an error. Check the console.</Message>
  //     </PageLayout>
  //   );
  // }

  return (
    <PageLayout>
      <Title>Ben's Awesome Docker Next App</Title>
      <DataPointList data={data} />
      {/* <Arcs data={data} /> */}
    </PageLayout>
  );
};

export default App;