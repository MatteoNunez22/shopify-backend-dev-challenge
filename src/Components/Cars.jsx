import React from "react";
import { Link } from "@reach/router";
import "./Styles.css";

const Cars = () => {
    return(
        <div className="main">
            <p className="title">Wallpaper Repository</p>

            <div className="bar2">
                <p className="subtitle">Car Category</p>
                <Link to="/" className="link3">Go Back</Link>
            </div>
            
            <div>
                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/2019-ssc-tuatara-3v-2560x1440.jpg?alt=media&token=d398b330-cd8e-475c-970c-c83550a41365" 
                    alt="car1"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/Vellano_Audi_RS7_2560x1440.jpg?alt=media&token=1e4fe732-fb69-4773-a9b0-7ca5eec4c1f1" 
                    alt="car2"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/Vellano_Audi_RS7_2_2560x1440.jpg?alt=media&token=57159063-ee7b-4c9f-95eb-999f12c6f1f8" 
                    alt="car3"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/_Lambo_2560x1440.jpg?alt=media&token=6d543fea-0b14-4641-9b1a-af657e82ccaf" 
                    alt="car4"
                ></img><br />
            </div>
        </div>
    );
};

export default Cars