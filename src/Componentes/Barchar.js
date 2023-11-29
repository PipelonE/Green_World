import { Line } from "react-chartjs-2";
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var Ganancias = [15000000,10000000,10500000, 17200085,15000000, 9000500,10500000, 11400000,15000000, 15128200,17200300, 10000000, ];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Ganancias',
            data: Ganancias,
            tension: 0.5,
            fill: true,
            borderColor: 'rgba(216, 90, 31)',
            backgroundColor: 'rgba(216, 90, 31, 0.212)',
            PointRadius: 5,
            pointBorderColor: '#008f39',
            pointBackgroundColor: '#008f39',
        },
    ],
};

var misoptions = {
    
};

export default function LinesChart(){
    return <Line data={midata} options={misoptions}/>
}
