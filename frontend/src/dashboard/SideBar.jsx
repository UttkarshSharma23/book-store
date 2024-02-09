// Sidebar requirements from flowbite
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import admin from '../assets/me.jpeg'
const SideBar = () => {
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href="#" img={admin} imgAlt="Flowbite logo">
                Uttkarsh Sharma
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
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>

                    <Sidebar.Item href="#" icon={HiShoppingBag}>
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


                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Upgrade to Pro
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideBar