import Card from "../Card";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";
import "./App.css";
import CreatePost from "../CreatePost";
import PostList from "../PostList";
import { useState } from "react";
import { PostListProvider } from "../store/post-list-store";
import { Outlet } from "react-router-dom";
export default function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <div className="content">
          <Header />
       <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
