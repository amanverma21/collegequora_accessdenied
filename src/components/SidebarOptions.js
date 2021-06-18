import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
      <a href = "https://team-access-denied.netlify.app/">
        <img
          src="team.jpg"
          alt=""
        />
        </a>
        <p> Our Team</p>
      </div>

      <div className="sidebarOption">
      <a href = "https://www.w3schools.com/whatis/">
        <img
          src="web.jpg "
          size = "5px"
          alt=""
          />
          </a>
        <p>Web Dev</p>
        
      </div>
      
      <div className="sidebarOption">
      <a href = "https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_robotics.htm">
        <img
          src="robotic.jpg"
          alt=""
          
        /></a>
        
        <p>Robotics & AI</p>
      </div>

      <div className="sidebarOption">
      <a href = "https://www.tutorialspoint.com/android/index.htm">
        <img
          src="android.jpg"
          alt=""
        />
        </a>
        <p>Android Dev.</p>
      </div>

      <div className="sidebarOption">
        <a href = "https://www.codechef.com/"></a>
        <a href = "https://www.codechef.com/">
        <img
          src="codechef.jpg"
          alt=""
        />
        </a>
        <p>Competitive Prog.</p>
      </div>

      <div className="sidebarOption">
      <a href = "https://www.tutorialspoint.com/blockchain/index.htm">
        <img
          src="block.jpg"
          alt=""
        />
        </a>
        <p>BlockChain</p>
      </div>

      <div className="sidebarOption">
      <a href = "https://www.investopedia.com/articles/basics/06/invest1000.asp">
        <img
          src="stocks.jpg"
          alt=""
        />
        </a>
        <p>Stocks</p>
      </div>

      <div className="sidebarOption">
      <a href = "https://www.tutorialspoint.com/entrepreneurship_development/index.htm">
        <img
          src="enter.jpg"
          alt=""
        />
        </a>
        <p>Entrepreneurship</p>
      </div>


      <div className="sidebarOption">
      <a href = "https://www.cricbuzz.com/">
        <img
          src="sports.jpg"
          alt=""
          />
          </a>
        <p>Sports</p>
      </div>
          {/* <div className="sidebarOption">
            <img
              src="https://images.theconversation.com/files/76631/original/image-20150331-1256-mz95ed.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
              alt=""
            />
            <p>Memories..</p>
          </div> */}
      {/* <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div> */}
    </div>
  );
}

export default SidebarOptions;
