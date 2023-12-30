import React, { useEffect, useMemo, useState } from "react";
import style from "../SCSS/Products.module.scss";
import AllProducts from "../Components/AllProducts";
import date, { dateStraps } from "../Redux/data";
import { useDebounce } from "../Assets/Hooks/useDebounce";
const Products = () => {
  const [mainDate,setMainDate]=useState(date)
  const [searchItem, setSearchItem] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorStrapColors, setSelectedColorStrapColors] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedValue = useDebounce(searchItem, 500);
  const filteredProductsByName = useMemo(() => {
    return mainDate.filter((item) =>
      item.name.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [debouncedValue,mainDate]);

  const filteredProductsByRange = useMemo(() => {
    let MasSelectedColor = filteredProductsByName.filter((item) => {
      return  mainDate===date ?(item.CaseColor.toLowerCase().includes(selectedColor.toLowerCase())): true;
    });
    let MasSelectedStrapColors=MasSelectedColor.filter((item) => {
      return item.StrapColors.toLowerCase().includes(selectedColorStrapColors.toLowerCase());
    });
    if (
      (minPrice === "" || isNaN(parseFloat(minPrice))) &&
      (maxPrice === "" || isNaN(parseFloat(maxPrice)))
    ) {
      return MasSelectedStrapColors;
    }

    let res = MasSelectedStrapColors.filter((item) => {
      const isInMinPriceRange = !!minPrice
        ? item.price >= parseFloat(minPrice)
        : true;
      const isInMaxPriceRange = !!maxPrice
        ? item.price <= parseFloat(maxPrice)
        : true;

      return isInMinPriceRange && isInMaxPriceRange;
    });
    return res;
  }, [minPrice, maxPrice, filteredProductsByName, selectedColor,selectedColorStrapColors,mainDate]);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(filteredProductsByRange.length / itemsPerPage);
  const displayedProducts = filteredProductsByRange.slice(startIndex, endIndex);
  useEffect(() => {
    setCurrentPage(1)
  },[filteredProductsByRange]);
  useEffect(() => {
    setSearchItem('')
    setMinPrice('')
    setMaxPrice('')
    setSelectedColor('')
    setSelectedColorStrapColors('')
  },[mainDate]);
  return (
    <div>
      <div className={style.WrapTextProducts}>
        <h1>Products</h1>
        <p>356 Total Products</p>
      </div>
      <div className={style.WrapperProducts}>
        {" "}
        <div className={style.AllFiltersWrapper}>
          <div className={style.SearchWrap}>
            <p>Search</p>
            <input
              placeholder="Type Here"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
          </div>
          <div className={style.SelectWrap}>
            <p>Select Products</p>
            <div className={style.SelectWrapText}>
              <p onClick={()=>setMainDate(date)}>Watches</p>
              <p onClick={()=>setMainDate(dateStraps)}>Straps</p>
            </div>
          </div>
          <div className={style.WrapPriceRange}>
            <p>Price Range</p>
            <div className={style.PriceRange}>
              <input
                placeholder="$0"
                onChange={(e) => setMinPrice(e.target.value)}
                value={minPrice}
              />
              <p>to</p>
              <input
                placeholder="$150"
                onChange={(e) => setMaxPrice(e.target.value)}
                value={maxPrice}
              />
            </div>
          </div>
          <div className={style.WrapCaseColor}>
            <p>Case Color</p>
            <button
              className={style.Black}
              onClick={() => setSelectedColor("Black")}
            />
            <button
              className={style.White}
              onClick={() => setSelectedColor("White")}
            />
            <button
              className={style.Blue}
              onClick={() => setSelectedColor("Blue")}
            />
          </div>
          <div className={style.StrapColors}>
            <p>Filter By Strap Colors</p>
            <button className={style.Orange} onClick={() => setSelectedColorStrapColors("orange")} />
            <button className={style.Green} onClick={() => setSelectedColorStrapColors("Purple")}/>
            <button className={style.Blue} onClick={() => setSelectedColorStrapColors("Blue")}/>
            <button className={style.Black} onClick={() => setSelectedColorStrapColors("Black")}/>
          </div>
        </div>
        <AllProducts
          date={displayedProducts}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export default Products;
