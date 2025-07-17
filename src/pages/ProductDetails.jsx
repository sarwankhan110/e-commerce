import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const resp = await axios.get(`https://mock.redq.io/api/products`);
      const foundProduct = resp.data.data.find(
        (item) => item.id.toString() === params.product_id
      );
      setProduct(foundProduct);
    };

    fetchProductDetails();
  }, [params.product_id]);

  if (!product) return <Box>Loading...</Box>;

  return (
    <Box>
      <img 
        src={product.gallery[0]?.original} 
        alt={product.name}
        style={{ 
          width: '100%', 
          maxWidth: '500px',
          height: 'auto'
        }}
      />
      
      <Typography variant="h5" mt={2}>
        {product.name}
      </Typography>
    </Box>
  );
};

export default ProductDetails;