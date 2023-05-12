import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard'
import Navbar from './Navbar'
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const filterItem = (category) => {
        if(category==="ALL"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curEle) => {
            return curEle.category === category;
        }
        );
        setMenuData(updatedList);
    };
    const uniqueList = [
        ...new Set(Menu.map((curEle) => {
            return curEle.category;
        })),"ALL"]
    const [menuList,setMenuList]=useState(uniqueList);

    console.log(uniqueList);

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}></Navbar>
            <MenuCard menuData={menuData}></MenuCard>
        </>
    )
}

export default Resturant