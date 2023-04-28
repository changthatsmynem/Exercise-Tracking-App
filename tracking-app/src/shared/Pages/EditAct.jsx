import React from "react";
import MainNav from "../components/Navbar/MainNav";
import { useState } from "react";
import "./EditAct.css" 

function FormActivityCard (){
    
    const [SelectedActivity,setSelectedActivity] = useState(null)
    
    function onSelectedActivity(activity) {
        setSelectedActivity(activity)
    }
    
    return (
        <div>
        <MainNav />
            <div className="EditBackground">
                <HeaderActivityCard />
                <ActivitiesChoice />
                <ActivityInput />
            </div>
        </div>
    )
}


function HeaderActivityCard (){
    return (
        <div className="Header">
            <h1 className="AddAct">Add Activity</h1>
            <p className="ActType">Activity Type</p>
        </div>
    )
}


function ActivitiesChoice (){
    return (
        <div>
            <div className="Icon-activitycard">
                <img 
                    onClick={() => onSelectedActivity}
                    // ../ ทำไมถึงย้อนไปไกลจัง
                    src="../src/shared/components/icons/walk_480.png"
                    alt="Walking"
                />
               
                <img                    
                    onClick={() => onSelectedActivity}
                    src="../src/shared/components/icons/running_480.png"    
                    alt="Running" 
                />
               
                <img 
                    onClick={() => onSelectedActivity}
                    src="../src/shared/components/icons/hiking_480.png" 
                    alt="Hiking"
                />
               
                <img 
                    onClick={() => onSelectedActivity} 
                    src="../src/shared/components/icons/bicycle_480.png"
                    alt="Cycling"
                />
                
                <img 
                    onClick={() => onSelectedActivity}
                    src="../src/shared/components/icons/swimming_480.png" 
                    alt="Swimming"
                />
            </div>
        </div>
    )
}


function ActivityInput (){
    return (
        <div >
            <div className="ActivityInput-ParentGroup">
                <div className="ActivityInput-group1">
                    <label className="gapact">Activity Name</label>
                    <input id="actinput0" type="text" placeholder="activity name" />
                        <div className="gc1">   
                            <label className="gaptime" >Start Time</label>
                            <input id="actinput" type="text" placeholder="start time" />
                        </div> 
                    <br />
                        <div className="gc2">
                            <label className="gaptime">End Time</label> &nbsp;
                            <input id="actinput" type="text" placeholder="end time" />
                        </div>
                    <br />
                    {/* เหลือใส่โค้ดให้เซฟรูปได้คิดยังไม่ออก */}
                </div>  
                <div className="ActivityInput-group2">
                    <label id="Label-Activity-Detail" className="gapact">Activity Detail</label>
                    <input id="actinput1" type="text" placeholder="activity detail" />
                    <input type="datetime-local" placeholder="Date" />
                </div>
            </div>
            <div className="ActivityInput-group3">
                <input id="distance" type="text" placeholder="Distance                                                                                                   KM" />
                <button id="submit"> Submit </button>
            </div>
        </div>
    
        
    )
}

export default FormActivityCard;