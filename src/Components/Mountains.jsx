import React from "react";
import { Link } from "@reach/router";
import "./Styles.css";

const Mountains = () => {
    return(
        <div className="main">
            <p className="title">Wallpaper Repository</p>

            <div className="bar2">
                <p className="subtitle">Mountain Category</p>
                <Link to="/" className="link3">Go Back</Link>
            </div>
            
            <div>
                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/167430.jpg?alt=media&token=1ac92ee8-f1a9-4d46-b218-d483dfed49ef" 
                    alt="mountain1"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/51781.jpg?alt=media&token=f1b1c45f-5099-455c-9ab0-df64e8149c9d" 
                    alt="mountain2"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/Snow_Mountain_Clouds_Winter_Nature_Landscape_2560x1440.jpg?alt=media&token=6b9ebabc-5aa3-4997-971c-1097d31a4e3d" 
                    alt="mountain3"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/annapurna-massif-himalayas-nepal-4k-wallpaper.jpg?alt=media&token=b63a4d04-8bcb-4484-8f5a-4787ad17f32c" 
                    alt="mountain4"
                ></img><br />
            </div>
        </div>
    );
};

export default Mountains