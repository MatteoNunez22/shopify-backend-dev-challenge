import React from "react";
import { Link } from "@reach/router";
import "./Styles.css";

const Sea = () => {
    return(
        <div className="main">
            <p className="title">Wallpaper Repository</p>

            <div className="bar2">
                <p className="subtitle">Sea Category</p>
                <Link to="/" className="link3">Go Back</Link>
            </div>
            
            <div>
                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/ios-11-stock-original-4k-ij-2560x1440.jpg?alt=media&token=3dad4a66-dd31-4dd8-8031-6040b49a764a" 
                    alt="car1"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/lonely-sad-sea-water-4k-ov.jpg?alt=media&token=204bcd46-1b03-41e5-9227-3f3fc547de51" 
                    alt="car2"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/mac_os_x_apple_mavericks_waves_wave_94219_2560x1440.jpg?alt=media&token=a695e1c0-10c2-4012-aa15-68be46055f60" 
                    alt="car3"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/wp4040672.jpg?alt=media&token=f5d8e1f9-4824-4d83-a3cb-f6b81bfa23c9" 
                    alt="car4"
                ></img><br />
            </div>
        </div>
    );
};

export default Sea