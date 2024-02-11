// Sidebar requirements from flowbite
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import admin from '../assets/me.jpeg'
import { useContext } from 'react';
import {AuthContext} from "../context/AuthProvider"
const SideBar = () => {

    const {user} = useContext(AuthContext)
    // console.log(user);

    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="logo" className='w-16 h-16'>
               <p>{
                user?.displayName || "Demo User"
                }
                </p>
            </Sidebar.Logo>
            <Sidebar.Items>
                {/*--------------------review Dashboard--------------------------- */}
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>

                    {/*-------------------------review Upload------------------------------ */}
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Upload Book
                    </Sidebar.Item>

                    {/* ------------------------review Manage section ---------------------------*/}
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Manage Books
                    </Sidebar.Item>

                    {/*---------------------review Users--------------------------------------- */}
                    <Sidebar.Item href="/admin/dashboard/users" icon={HiUser}>
                        Users
                    </Sidebar.Item>

                    <Sidebar.Item href="/admin/dashboard/products" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>

                    {/* ----------------------------review Login------------------------- */}
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>

                    {/* ---------------------------review Logout--------------------------- */}
                    <Sidebar.Item href="/logout" icon={HiTable}>
                        Log Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideBar