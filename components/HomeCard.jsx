import { AiFillHeart } from "react-icons/ai";
import { BsBookmarkStarFill } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState} from "react";

export default function HomeCard({ data  }) {
  const [click , setClick] = useState(false);

  const scheduleDateRender = () => { 
    console.log(data)
    
    return(
    data.schedule.map((dat) => {
      return <p style ={{ fontSize : "12px"}}> {dat.timestamp}/{dat.postal } </p> 
    }))
  }
  
  
  return (
    <div style ={{ display : "absolute" , zIndex : "0"}}>
      <div style={{ display: "flex" }}>
        <div>
          <Link to={`/feed/info` } state ={{id : data.title}}>
        <AiFillHeart style={{ color: "orange" }} /></Link>
        <a href={data.link}>
          <BsBookmarkStarFill style={{ color: "#bebebe" }} />
        </a> </div>
        <label style ={{  fontStyle : "italic" , fontWeight : "bold"}}> {data.title} </label> </div>
   
      <Fonty />
        

      <li
        style={{
          fontSize : "15px" , fontWeight : "bold",
          margin: "0px 4px 15px 5px",
          display: "flex",
        }}
      >  {data.player[0]}
      </li>
      <div>
        <p style={{ display: "flex", gap: "65px", margin: " 5px 2px 5px" }}>
          <P>장르</P>
          <p style={{ fontSize: "12px" }}>{data.genre}</p>
        </p>

        <p style={{ display: "flex", gap: "33px", margin: "5px 2px 5px " }}>
          <P>선예매날짜 </P>
          <p style={{ fontSize: "12px" }}>
            {data.ticketing[0].start}
          </p>
        </p>
        <p style={{ display: "flex", gap: "35px", margin: "5px 2px 5px" }}>
          <P> 티켓팅날짜</P>
          <p style={{ fontSize: "12px" }}>{data.ticketing[1].start}</p>
        </p>

        <p style={{ display: "flex", gap: "10px", margin: "5px 2px 5px " }}>
          <P>공연날짜 / 장소 </P>
          <p>
          {scheduleDateRender()} </p>
        </p>

       
      </div>
    </div>
  );
}

const Fonty = styled.div`
  
  height: 180px;
  font-size: 33px;
  background-color: #ffffff;
  text-align: center;
`;

const P = styled.p`
  font-size: 11px;
  font-weight: bold;
`;
