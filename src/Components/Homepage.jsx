import React, { useState } from "react";
import { Link } from "@reach/router";
import { storage } from "../firebase";
import "./Styles.css";

const Homepage = () => {
    const [imageLink, setImageLink] = useState("");

    const getImageURL = () => {
        var storageRef = storage.ref();
        var imageRef = storageRef.child('images/annapurna-massif-himalayas-nepal-4k-wallpaper.jpg');
        console.log("imageRef: " + imageRef);

        var imageURL = imageRef.getDownloadURL();
        setImageLink(imageURL);
    }

    return(
        <div className="main">
            <p className="title">Wallpaper Repository</p>

            <div className="bar1">
                <p className="subtitle">Categories:</p>
                <Link to="cars" className="link1">Cars</Link>
                <Link to="mountains" className="link1">Mountains</Link>
                <Link to="sea" className="link2">Sea</Link>
            </div>

            <div style={{marginTop: "64px"}}>
                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/annapurna-massif-himalayas-nepal-4k-wallpaper.jpg?alt=media&token=b63a4d04-8bcb-4484-8f5a-4787ad17f32c" 
                    alt="mountain4"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/wp4040672.jpg?alt=media&token=f5d8e1f9-4824-4d83-a3cb-f6b81bfa23c9" 
                    alt="sea4"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/_Lambo_2560x1440.jpg?alt=media&token=6d543fea-0b14-4641-9b1a-af657e82ccaf" 
                    alt="car4"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/Snow_Mountain_Clouds_Winter_Nature_Landscape_2560x1440.jpg?alt=media&token=6b9ebabc-5aa3-4997-971c-1097d31a4e3d" 
                    alt="mountain3"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/mac_os_x_apple_mavericks_waves_wave_94219_2560x1440.jpg?alt=media&token=a695e1c0-10c2-4012-aa15-68be46055f60" 
                    alt="sea3"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/Vellano_Audi_RS7_2_2560x1440.jpg?alt=media&token=57159063-ee7b-4c9f-95eb-999f12c6f1f8" 
                    alt="car3"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/51781.jpg?alt=media&token=f1b1c45f-5099-455c-9ab0-df64e8149c9d" 
                    alt="mountain2"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/lonely-sad-sea-water-4k-ov.jpg?alt=media&token=204bcd46-1b03-41e5-9227-3f3fc547de51" 
                    alt="sea2"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/Vellano_Audi_RS7_2560x1440.jpg?alt=media&token=1e4fe732-fb69-4773-a9b0-7ca5eec4c1f1" 
                    alt="car2"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/167430.jpg?alt=media&token=1ac92ee8-f1a9-4d46-b218-d483dfed49ef" 
                    alt="mountain1"
                ></img><br />

                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/ios-11-stock-original-4k-ij-2560x1440.jpg?alt=media&token=3dad4a66-dd31-4dd8-8031-6040b49a764a" 
                    alt="sea1"
                ></img><br />
                
                <img className="imageSize1"
                    src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/2019-ssc-tuatara-3v-2560x1440.jpg?alt=media&token=d398b330-cd8e-475c-970c-c83550a41365" 
                    alt="car1"
                ></img><br />
            </div>
        </div>
    );
};

export default Homepage
