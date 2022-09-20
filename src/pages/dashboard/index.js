import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { Chart } from '@common/Chart';

const PRODUCT_LIMIT = 5;
const PRODUCT_OFFSET = 5;

const Dashboard = () => {
  let products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));

  const categories = products?.map((product) => product.category);
  const categoryNames = categories?.map((category) => category.name);
  const countOcurrences = (array) => array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryNames),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', '#2a71d0', '#aa3344'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
};

export default Dashboard;
