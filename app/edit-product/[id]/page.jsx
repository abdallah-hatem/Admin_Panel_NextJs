"use client";

import CardComponent from "@/components/webComponents/CardComponent";
import { useCallback, useEffect, useRef, useState } from "react";
import ModalComponent from "@/components/webComponents/ModalComponent";
import { useParams } from "next/navigation";
import AddDetailsTable from "@/app/products/components/addDetailsTable";
import GET_CATEGORIES from "@/apis/categories/getCategories";
import GET_PRODUCT_BY_ID from "@/apis/products/getProductById";
import GET_SIZES from "@/apis/sizes/getSizes";
import GET_COLORS from "@/apis/colors/getColors";
import UPDATE_PRODUCT_AND_STC from "@/apis/products/updateProduct";
import isAuthenticated from "@/components/webComponents/IsAuth";

function EditProduct() {
  const defaultValues = useRef({
    desc: "",
    name: "",
    price: "",
    categoryId: "",
  });
  const [values, setValues] = useState(defaultValues.current);

  const router = useParams();
  const productId = router.id;

  const [productData, setProductData] = useState(null);
  const [sizesData, setSizesData] = useState(null);
  const [colorsData, setColorsData] = useState(null);
  const [categoriesData, setCategoriesData] = useState(null);

  const [isPopUp, setIsPopUp] = useState(false);
  const [sizeToColors, setSizeToColors] = useState([]);

  async function getData() {
    GET_PRODUCT_BY_ID(productId).then((data) => setProductData(data.product));
    GET_SIZES().then((data) => setSizesData(data.sizes));
    GET_COLORS().then((data) => setColorsData(data.colors));
    GET_CATEGORIES().then((data) => setCategoriesData(data.categories));
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(values, "valsss");
  }, [values]);

  useEffect(() => {
    setDefVals();
  }, [productData]);

  function setDefVals() {
    if (productData) {
      const { id, Category, SizeToColors, ...rest } = productData;
      setValues((prev) => ({ ...prev, ...rest }));
    }
  }

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    let data = {
      ...values,
      price: Number(values.price),
      categoryId: Number(values.categoryId),
      productId: productData && productData.id,
    };

    if (sizeToColors.length > 0) {
      data.sizeToColors = sizeToColors;
    }

    console.log(data, "dataaa");

    UPDATE_PRODUCT_AND_STC(data, productId);
  }

  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      value: values["name"],
      onChange: handleChange,
    },
    {
      name: "price",
      type: "number",
      placeholder: "Price",
      value: values["price"],
      onChange: handleChange,
    },
    {
      name: "desc",
      type: "text",
      placeholder: "Description",
      value: values["desc"],
      onChange: handleChange,
    },
    // {
    //   name: "quantity",
    //   type: "number",
    //   placeholder: "Quantity",
    //   value: values["quantity"],
    //   onChange: handleChange,
    // },
  ];

  return (
    productData &&
    sizesData &&
    colorsData &&
    categoriesData && (
      <CardComponent title="Edit product">
        <>
          <form
            onSubmit={handleSubmit}
            style={{ padding: 10, display: "flex", flexDirection: "column" }}
          >
            {inputs.map((el) => (
              <input
                name={el.name}
                value={el.value}
                type={el.type}
                placeholder={el.placeholder}
                onChange={el.onChange}
              />
            ))}

            {/* Categories */}
            <select
              onChange={(e) => handleChange(e)}
              name="categoryId"
              placeholder="Categories"
              defaultValue={values["categoryId"]}
            >
              <option value="">--Categories--</option>
              {categoriesData?.map((el) => (
                <option itemType="number" value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => setIsPopUp(true)}
              style={{ marginTop: 10, width: 90 }}
              name="button"
              type="button"
            >
              Add Details
            </button>

            {/* Colors Modal */}
            <ModalComponent isOpen={isPopUp} onCancel={() => setIsPopUp(false)}>
              <CardComponent title="Edit details">
                {productData.SizeToColors.map((el, index) => (
                  <AddDetailsTable
                    setSizeToColors={setSizeToColors}
                    sizeToColors={sizeToColors}
                    key={index}
                    id={index}
                    colorsData={colorsData}
                    sizesData={sizesData}
                    defaultData={el}
                  />
                ))}
              </CardComponent>
            </ModalComponent>

            <button style={{ marginTop: 30 }} name="button" type="submit">
              Submit
            </button>
          </form>
        </>
      </CardComponent>
    )
  );
}

export default isAuthenticated(EditProduct);
