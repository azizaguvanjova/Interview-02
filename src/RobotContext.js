import React, {useContext,useState,createContext} from "react";
 // create a Context for the robot list
 const RobotContext = createContext();


 export function useRobot() {
    return useContext(RobotContext)
 }

 export function RobotProvider({children}){
    const [robots, setRobots ] = useState([])


    const addRobot = (name) =>{
        if(robots.some((robot) => robot.name === name)){
            alert('robot listede bulunamadi')
        }else {
            const newRobot = { name, url : `https://robohash.org/${name}`}
            setRobots([...robots,newRobot])
        }
    }



    const removeRobot = (name) =>{
        setRobots(robots.filter((robot) => robot.name !== name))
    }


    return (
        <RobotContext.Provider value={{robots, addRobot,removeRobot}}>
            {children}
        </RobotContext.Provider>
    )
 }