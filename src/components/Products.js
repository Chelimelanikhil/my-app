import styled from 'styled-components';

const ProductsSection = styled.section`
  padding: 50px 0;
  background-color: #e6f1f5;
  text-align: center;
`;

const ProductCard = styled.div`
  display: inline-block;
  width: 250px;
  margin: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
`;

const Products = () => {
  return (
    <ProductsSection>
      <h2>Our Products</h2>
      <div>
        <ProductCard>
          <img src="filter.jpg" alt="Water Filter" />
          <h3>Water Filter</h3>
          <p>High-quality filtration systems for clean water.</p>
        </ProductCard>
        <ProductCard>
          <img src="pump.jpg" alt="Water Pump" />
          <h3>Water Pump</h3>
          <p>Efficient and durable pumps for your needs.</p>
        </ProductCard>
        <ProductCard>
          <img src="tank.jpg" alt="Water Tank" />
          <h3>Water Tank</h3>
          <p>Reliable storage solutions for water.</p>
        </ProductCard>
      </div>
    </ProductsSection>
  );
};

export default Products;
