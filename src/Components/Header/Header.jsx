import './Header.css'
import {faBed,faPlane,faCar,faTaxi,faHotel, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import {format} from "date-fns";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {useNavigate} from "react-router-dom"

const Header = ({type}) => {
    const [open,setOpen]=useState(false);
    const [dest,setDest]=useState("");
    const navigate=useNavigate();
    const [openOption,setOpenOption]=useState(false);
    const [option,setOption]=useState({
        adults:2,
        children:1,
        room:1
    });
    const [date,setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:'selection'

        }
    ])
    const handleOption=(name,operation)=>{
        setOption((prev)=>{
            return{
                    ...prev,[name]:operation==="i"?option[name]+1:option[name]-1
            }
        })
    
    }

    const handleClick=()=>{
        navigate("/hotels",{state:{dest,date,option}});
    }
  return (
      <div className="header">
          <div className={ type==="List" ?"headerContainer ListMode":"headerContainer"}>
          <div className="headerList">
              <div className="headerListItem active">
              <FontAwesomeIcon icon={faHotel} />
              <span>Stays</span>
              </div>
              <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
              </div>
              <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Retals</span>
              </div>
              <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
              </div>
              <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
              </div>
          </div>
          { type!=="List" && <>
          <h1 className='HeaderTitle'>A LifeTime Of Discount! Get Our MemberShip To Avail It</h1>
            <p className='HeaderDesc'>Get Rewards For Your Every Travel!</p>
            <button className="headerButton">Signin/Register</button>   
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input type='text' placeholder='Where are you going?' className='headerSearchInput' onChange={(e)=>setDest(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span onClick={()=>{setOpen(!open)}} className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                {open && <DateRange editableDateInputs={true}
                onChange={item=>setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                />}
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                <span className='headerSearchText' onClick={()=>{setOpenOption(!openOption)}}>{`${option.adults} adults . ${option.children} children . ${option.room} room`}</span>
                { openOption && 
                <div className="options">
                    <div className="optionItem">
                        <span className="optionText" >Adults</span>
                        <div className="optionCounter">
                        <button disabled={option.adults<=1} className="optioncounterButton" onClick={()=>handleOption("adults","d")}>-</button>
                        <span className="optioncounternumber">{option.adults}</span>
                        <button  className="optioncounterButton"onClick={()=>handleOption("adults","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText" >Children</span>
                        <div className="optionCounter">
                        <button disabled={option.children<=0} className="optioncounterButton" onClick={()=>handleOption("children","d")}>-</button>
                        <span className="optioncounternumber">{option.children}</span>
                        <button className="optioncounterButton" onClick={()=>handleOption("children","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText" >Room</span>
                        <div className="optionCounter">
                        <button disabled={option.room<=1} className="optioncounterButton" onClick={()=>handleOption("room","d")}>-</button>
                        <span className="optioncounternumber">{option.room}</span>
                        <button className="optioncounterButton" onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>
                
                </div>
                }
                </div>
                <div className="headerSearchItem">
                    <button className="headerButton" onClick={handleClick}>
                        Search
                    </button>

                </div>
            </div> 
            </>}    
        </div>
      </div>
  )
}

export default Header