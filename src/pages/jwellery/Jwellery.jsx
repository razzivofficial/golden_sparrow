import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import PCard from "../../components/card/Card";
import "../jwellery/jwellery.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";

const Jwellery = () => {
  const type = useParams();
  const [arr, setArr] = useState([]);
  const pageButtons = [];
  const [page, setPage] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  const getData = () => {
    fetch(`http://localhost:6060/jewellery`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const odata = data.filter((el) => {
          return el.product === type.type;
        });
        console.log(odata);
        setArr(odata);
        const start = (page - 1) * 12;
        const end = page * 12;
        const newData = odata.slice(start, end);
        setPageArr(newData);
      });
  };

  const pageNum = Math.ceil(arr.length / 12);
  console.log(pageNum);
  for (let i = 1; i <= pageNum; i++) {
    pageButtons.push(i);
  }

  const handlePage = (page) => {
    setPage(page);
    const start = (page - 1) * 12;
    const end = page * 12;
    const newData = arr.slice(start, end);
    setPageArr(newData);
  };

  useEffect(() => {
    getData();
  }, [type, page]);
  return (
    <>
      <Navbar />
      <div className="card_div">
        {pageArr.map((el) => {
          return (
            <PCard
              image={el.image}
              link={el.link}
              value={el.value}
              product={el.product}
            />
          );
        })}
      </div>
      <ButtonGroup
        variant="outline"
        p={"0.2%"}
        display={"flex"}
        justifyContent={"center"}>
        {pageButtons.map((el) => {
          return (
            <Button colorScheme="purple" onClick={() => handlePage(el)}>
              {el}
            </Button>
          );
        })}
      </ButtonGroup>
      ;
      <Footer />
    </>
  );
};

export default Jwellery;
