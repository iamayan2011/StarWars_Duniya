import Card1 from "../../../Components/Card/Card";

import React, { useState, useEffect } from "react";

import "./Main1.css";

import { flushSync } from "react-dom";
import Modal2 from "../../../Components/Modal/Modal";
import { Button } from "react-bootstrap";

export default function Main1() {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [countpage, setCountPage] = useState(1);
  const [cardsnext, setCardsnext] = useState(null);
  const [cardsprev, setCardsprev] = useState(null);

  const handlenext = () => {
    setCards(cardsnext);
    const page = currentpage + 1;
    setCurrentPage(page);
  };

  const handleprev = () => {
    setCards(cardsprev);
    const page = currentpage - 1;
    setCurrentPage(page);
  };

  const handleRefresh = () => {
    fetchcard();
  };

  const fetchcard = async () => {
    setLoading(true);

    try {
      let response = await fetch(
        "https://swapi.dev/api/people/?page=" + currentpage,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response = await response.json();

      if (response.next !== null) {
        let responsenext = await fetch(
          "https://swapi.dev/api/people/?page=" + (currentpage + 1),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        responsenext = await responsenext.json();
        setCardsnext(responsenext.results);
      } else {
      }

      if (response.prev !== null) {
        let responseprev = await fetch(
          "https://swapi.dev/api/people/?page=" + (currentpage - 1),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        responseprev = await responseprev.json();
        setCardsprev(responseprev.results);
      } else {
      }

      setCards(response.results);

      const pagemax = Math.ceil(response.count / 10);
      setCountPage(pagemax);
    } catch (error) {
      console.log("There was an error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    flushSync(() => {
      fetchcard();
    });
  }, [currentpage]);

  return (
    <div className="main1parent" id="characters1">
      <div>
        <div style={{ backgroundColor: "black" }}>
          <marquee>
            <div className="sechead">CHARACTERS</div>
          </marquee>
        </div>

        <div
          className="justify-content-center d-flex"
          style={{ marginTop: "10%" }}
        >
          <Button variant="warning" onClick={handleRefresh}>
            Refresh
          </Button>
        </div>
        {cards ? (
          <div className="d-flex row mt-0 m-4">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              cards.map((d) => (
                <div className="d-flex col-12 col-md-6 col-lg-4 row-flex card21 p-4">
                  <Card1 item={d}></Card1>
                </div>
              ))
            )}
          </div>
        ) : (
          <h1>Data not fetched yet</h1>
        )}

        {console.log("card me kya hai", cards)}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-warning m-3"
          id="prevbtn"
          onClick={handleprev}
          style={{
            visibility: cardsprev ? "visible" : "hidden",
            width: "100px",
            display: "block",
          }}
        >
          Previous
        </button>
        <div>
          Page {currentpage} of {countpage}
        </div>
        <button
          className="btn btn-warning m-3"
          id="nextbtn"
          onClick={handlenext}
          style={{
            visibility: cardsnext ? "visible" : "hidden",
            width: "100px",
            display: "block",
          }}
        >
          Next
        </button>
      </div>

      <Modal2></Modal2>
    </div>
  );
}
