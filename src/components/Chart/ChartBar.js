import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%"; //at the beggining the height of the filled will be %0

  if (props.maxValue > 0) {
    //for calculating the height of the filled and then transform it into a string:
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}>            
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};  

export default ChartBar;
