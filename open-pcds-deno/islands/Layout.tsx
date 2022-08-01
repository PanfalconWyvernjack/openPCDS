/** @jsx j */
import { h } from "preact";
import {tw} from "@twind";
import SideNav from "./SideNav";
import Topbar from "./Topbar"; 

export default function Layout() {
 
    return (
        <div>
            <TopBar/>
            <SideNav/>
        </div>
    );   
}