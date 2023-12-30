import React, {useState } from "react";
import style from "../SCSS/AllProducts.module.scss";
import Select from "react-select";
import BasketWhite from "../Assets/Image/BasketWhite.png";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/Slice/cartSlice";
const AllProducts = ({ date, setCurrentPage, totalPages, currentPage }) => {
  const dispatch=useDispatch()
  const AddWatch=(item)=>{dispatch(addItemToCart(item))}
  const options = [
    { value: "Recommended", label: "Recommended" },
    { value: "What New", label: "What New" },
    { value: "Popularity", label: "Popularity" },
    { value: "Price Low to High", label: "Price Low to High" },
    { value: "Price High to Low", label: "Price High to Low" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const PageNumber = [];
  for (let i = 1; i <= totalPages; i++) {
    PageNumber.push(i);
  }
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(0, 123, 255, 0.6)" : null,
      "&:hover": {
        borderColor: "#aaa",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#007bff" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#007bff",
        color: "white",
      },
    }),
  };
  const sortData = () => {
    switch (selectedOption.value) {
      case "Recommended":
        return date;
      case "What New":
        return date;
      case "Popularity":
        return date;
      case "Price Low to High":
        return date.sort((a, b) => a.price - b.price);
      case "Price High to Low":
        return date.sort((a, b) => b.price - a.price);
      default:
        return date;
    }
  };

  const sortedData = sortData();
  return (
    <div className={style.AllProducts}>
      <div className={style.SortBy}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          styles={customStyles}
        />
      </div>
      <div className={style.WrapperProducts}>
        {sortedData.map((element, index) => (
          <div className={style.WrapperProduct} key={index.toString()}>
            <div className={style.WrapperImgProduct}>
              <img src={element.photo} alt="" />
              <div className={style.ContainerOverflow} onClick={()=>AddWatch(element)}>
                <img src={BasketWhite} />
                <p>Order Watch</p>
              </div>
            </div>
            <div className={style.WrapperProductText}>
              <p>{element.name}</p>
              <h4>${element.price}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className={style.WrapperButtonPagination}>
        <div className={style.Pagination}>
          {PageNumber.map((item) => {
            return (
              <span
                onClick={() => setCurrentPage(item)}
                className={currentPage === item ? style.active : null}
              >
                {item}
              </span>
            );
          })}
        </div>
        <button>Design Your Watch</button>
      </div>
    </div>
  );
};

export default AllProducts;
