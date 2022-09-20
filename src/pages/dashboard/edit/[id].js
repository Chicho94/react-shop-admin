import FormProduct from '@components/FormProduct';
import endPoints from '@services/api';
import { useRouter } from 'next/router';

const { useEffect, useState } = require('react');

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;

    async function getProduct() {
      const response = await fetch(endPoints.products.getProduct(id)).then((res) => res.json());
      setProduct(response);
    }
    getProduct();
  }, [router?.isReady]);

  return <FormProduct product={product} />;
}
