import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DoughnutChart = (props) => {
  return (
    <div >
      <div className="font-bold text-left mb-5">{props.title}</div>
      <div>
        <Doughnut
          data={props.data}
          options={props.options}
          height={props.height}
          width={props.width}
        />
      </div>
    </div>
  );
};

export default DoughnutChart;