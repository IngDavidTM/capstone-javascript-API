import './index.css';
import getAllData from './modules/getfoods.js';

const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';

getAllData(allBeefURL);