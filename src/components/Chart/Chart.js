import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);//tranform object to numbers (we wil get 12 numbers)
    const totalMaximum = Math.max(...dataPointValues) //12
  return (
    <div className="chart">
      
      {props.dataPoints.map((dataPoint) => ( //create a new bar for every datapoint
        <ChartBar 
         key={dataPoint.label}
         value={dataPoint.value}
         maxValue={totalMaximum} 
         label={dataPoint.label}
         />
      ))}
    </div>
  );
};

export default Chart;
