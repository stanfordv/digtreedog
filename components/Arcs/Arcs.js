import  Arc  from "./Arc.jsx";
import { ListContainer } from "../DataPointList/DataPointList.styles";

const Arcs = ({ data }) => {
  if (!data) return null;

  const { dataPoints } = data;
 console.log("--",dataPoints)
  // const dataNotEmpty = dataPoints.length !== 0;
 
  // const lastId = dataNotEmpty
  //   ? parseInt(dataPoints[dataPoints.length - 1].id)
  //   : 0;

  return (
    <ListContainer>
      {/* {dataNotEmpty &&
        dataPoints.map(item => <DataPoint key={item.id} {...item} />)} */}
      <Arc
        value=""
        timestamp={Date.now()}
      />
      DIP
    </ListContainer>
  );
};

export default Arcs;
