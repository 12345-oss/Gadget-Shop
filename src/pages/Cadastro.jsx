import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ProductForm.css";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const cadastrarProduto = (e) => {
    e.preventDefault();
    console.log("Nome do Produto: " + productName);
    console.log("Descrição do Produto: " + productDescription);
    console.log("Marca: " + productBrand);
    console.log("Data de Fabricação: " + manufacturingDate);
    console.log("Quantidade em Estoque: " + stockQuantity);
  };

  return (
    <div className="product-form-container">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={cadastrarProduto}>
        <label>
          <span>Nome do Produto</span>
          <input
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Descrição do Produto</span>
          <textarea
            value={productDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Marca</span>
          <input
            type="text"
            value={productBrand}
            onChange={(e) => {
              setProductBrand(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Data de Fabricação</span>
          <input
            type="date"
            value={manufacturingDate}
            onChange={(e) => {
              setManufacturingDate(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Quantidade em Estoque</span>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => {
              setStockQuantity(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <Button type="submit" className="btn btn-primary">
          Cadastrar Produto
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
