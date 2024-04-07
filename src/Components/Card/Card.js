import React, { useEffect, useState } from "react";
import "./Card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";




function Modal2(props) {

  const {homeurl} = {...props}

  const [homed, setHomed] = useState(null);
  

  const fetchhome = async ()=>{

    

    try {
      let response = await fetch(
        homeurl,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      
  
      response = await response.json();
      setHomed(response);

    } catch (error) {
      console.log("Error with fetching Home World", error)
    }


    



    

  }

  useEffect(() => {
    fetchhome();
  },[])

  

  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor: props.hexColor}}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>About Character</h5>
        <div className="d-flex row">
          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">Height: </span>
              <span className="modalcatdes"> {props.height}m</span>
            </p>
          </div>

          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">Mass: </span>
              <span className="modalcatdes"> {props.mass}kg</span>
            </p>
          </div>

          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">Date added: </span>
              <span className="modalcatdes"> {props.doa}</span>
            </p>
          </div>

          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">No of films: </span>
              <span className="modalcatdes"> {props.film}</span>
            </p>
          </div>

          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">Birth Year: </span>
              <span className="modalcatdes"> {props.dob}</span>
            </p>
          </div>

          
        </div>

        <hr></hr>

          <h5>About Character's Homeworld</h5>
          {!homed ? (<h6>Loading Home Details...</h6>) : 
          (<div className="d-flex row">
          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">Name: </span>
              <span className="modalcatdes"> {homed.name}</span>
            </p>
          </div>

          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">Terrain: </span>
              <span className="modalcatdes"> {homed.terrain}</span>
            </p>
          </div>

          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">Climate: </span>
              <span className="modalcatdes"> {homed.climate}</span>
            </p>
          </div>

          <div className="d-flex col-6">
            <p>
              <span className="modalcathead">Amount of Residents: </span>
              <span className="modalcatdes"> {homed.population}</span>
            </p>
          </div>


          </div>)}
          
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: props.hexColor}}>
        <div className="d-flex justify-content-center">Click anywhere to close</div>
      </Modal.Footer>
    </Modal>
  );
}

export default function Card1(props) {


  const {species} = {...props.item}

  const [specie, setSpecie] = useState(null);
  

  const fetchspecie = async ()=>{

    

    try {
      let response = await fetch(
        species,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      
  
      response = await response.json();
      setSpecie(response);

    } catch (error) {
      console.log("Error with fetching the Species", error)
    }


    }

    useEffect(() => {
      fetchspecie();
    },[])

    function stringToHexColor(str) {
      
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
    
      // to hexa
      let color = '#';
      for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF; //8bits
        const adjustedValue = Math.min(Math.max(1, value), 160); // val btw 1 to 160 to ensure darker colors
        color += adjustedValue.toString(16).padStart(2, '0'); 
      }
    
      return color;
    }
    
   
    const hexColor = specie ? stringToHexColor(specie.name) : "#000000";
   
    


  



  const [modalShow, setModalShow] = useState(false);
  const homeurl = props.item.homeworld;

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

const originalDate = props.item.created;
const formattedDate = formatDate(originalDate);
 

  return (
    <div className="cardparent" >
      <Card style={{ width: "100%", backgroundColor: hexColor }} className="card11">
        <Card.Img
          variant="top" className="cardimg"
          src="https://fastly.picsum.photos/id/136/4032/2272.jpg?hmac=8ygXp61m49P3x_uMkBih2sZHJwEaTLp5ZuOOVNE9qhU"
        />
        <Card.Body className="cardbody">
          <Card.Title className="d-flex justify-content-center cardhead">
            {props.item.name}
          </Card.Title>
          <div className="proper">
            <span className="bold deshead">Gender: </span>
            <span className="desdes">{props.item.gender}</span>
          </div>

          {!specie ? (
          <div className="proper">
          <span className="bold deshead">Species: </span>
          <span className="desdes">NA</span>
        </div>
          ) : (<div className="proper">
            <span className="bold deshead">Species: </span>
            <span className="desdes">{specie.name}</span>
          </div>)
          
          
          
          }

          

          <Card.Text>
            
          </Card.Text>
          <Button variant="warning" onClick={() => setModalShow(true)} className="r-8">
            Show Detais
          </Button>
          <Modal2
            show={modalShow}
            onHide={() => setModalShow(false)}
            name={props.item.name}
            height={props.item.height}
            mass={props.item.mass}
            doa={formattedDate}
            dob={props.item.birth_year}
            film={props.item.films.length}
            homeurl={homeurl}
            hexColor={hexColor}
            
          />
        </Card.Body>
      </Card>
    </div>
  );
}
