import Image1 from "../../utils/Image-1.png";
import Image2 from "../../utils/Image-2.gif";
import Image3 from "../../utils/Image-3.png";
import Image4 from "../../utils/Image-4.png";
import Video1 from "../../utils/Video-1.mp4";
import Video2 from "../../utils/Video-2.mp4";
import Video3 from "../../utils/Video-3.mp4";
import { Slider } from "antd";
import { useState } from "react";
import "./Body.css";

const Body = () => {
    const [value, setValue] = useState(0);

    const handleChange = (currentValueString, actualValue) => {
        switch (currentValueString) {
            case "Electronics":
                setValue(value + actualValue * 300);
                break;
            case "Beauty-Fashion":
                setValue(value + actualValue * 150);
                break;
            case "Grocery-Home-Essentials":
                setValue(value + actualValue * 75);
                break;
            case "Medicines-Healthcare":
                setValue(value + actualValue * 100);
                break;
            case "Cards-Subscriptions":
                setValue(value + actualValue * 1000);
                break;
            default:
                setValue(0);
        }
    };

    return (
        <div className="body">
            <div className="video-component-1">
                <div className="text">
                    <p className="line-1">Welcome To</p>
                    <p className="line-2">India's #1</p>
                    <p className="line-3">
                        <span className="special-text">
                            Affiliate Marketing
                        </span>{" "}
                        Platform
                    </p>
                </div>
                <div className="video-animation-1">
                    <video
                        className="video-1"
                        src={Video1}
                        autoPlay
                        muted
                        playsInline
                        loop
                        style={{ border: "none", outline: "none" }}
                    />
                </div>
            </div>
            <div className="video-component-2">
                <div className="video-animation-2">
                    <video
                        className="video-2"
                        src={Video2}
                        height="500"
                        autoPlay
                        muted
                        playsInline
                        loop
                        style={{ border: "none", outline: "none" }}
                    />
                </div>
                <img src={Image1} alt="RatanTata" className="image" />
            </div>
            <div className="video-component-3">
                <div className="video-animation-3">
                    <video
                        className="video-3"
                        src={Video3}
                        height="500"
                        autoPlay
                        muted
                        playsInline
                        loop
                        style={{ border: "none", outline: "none" }}
                    />
                </div>
            </div>
            <div className="highlights">
                <div className="highlights-text">Our Highlights</div>
            </div>
            <div className="highlight-cards">
                <div className="highlight-card">
                    <p>30L+</p>
                    <p>Affiliate Marketers</p>
                </div>
                <div className="highlight-card">
                    <p>1Cr+</p>
                    <p>Transactions</p>
                </div>
                <div className="highlight-card">
                    <p>₹40 Cr+</p>
                    <p>Paid to Users</p>
                </div>
            </div>
            <div className="gif-component-1">
                <img src={Image2} alt="Brands" className="gif-image" />
                <div className="gif-text">
                    <p className="gif-line-top">Earn Up To</p>
                    <p className="gif-line-middle">50%</p>
                    <p className="gif-line-middle">Profit</p>
                    <p className="gif-line-bottom">on 200+ Brands</p>
                </div>
            </div>
            <div className="profit-section">
                <div className="profits-text-1">
                    Calculate Your Monthly Profit
                </div>
                <div className="profits-text-2">Choose Number of Orders</div>
            </div>
            <div className="slider-component">
                <div className="slider-text">
                    <label htmlFor="slider-1">Electronics</label>
                    <Slider
                        min={0}
                        max={30}
                        onChange={(event) => handleChange("Electronics", event)}
                    />
                </div>
                <div className="slider-text">
                    <label>Beauty and Fashion</label>
                    <Slider
                        min={0}
                        max={30}
                        onChange={(event) =>
                            handleChange("Beauty-Fashion", event)
                        }
                    />
                </div>
                <div className="slider-text">
                    <label>Grocery and Home Essentials</label>
                    <Slider
                        min={0}
                        max={30}
                        onChange={(event) =>
                            handleChange("Grocery-Home-Essentials", event)
                        }
                    />
                </div>
                <div className="slider-text">
                    <label>Medicines and Healthcare</label>
                    <Slider
                        min={0}
                        max={30}
                        onChange={(event) =>
                            handleChange("Medicines-Healthcare", event)
                        }
                    />
                </div>
                <div className="slider-text">
                    <label>Cards and Subscriptions</label>
                    <Slider
                        min={0}
                        max={30}
                        onChange={(event) =>
                            handleChange("Cards-Subscriptions", event)
                        }
                    />
                </div>
                <div className="sliders-profit">
                    <p>Estimated Profit: ₹{value}*</p>
                </div>
            </div>
            <div className="rockstars-section">
                <div className="rockstars-text-1">
                    Hear It From Our Rockstars
                </div>
                <div className="rockstars-text-2">Join 30L+ Earning Users</div>
            </div>
            <div className="rockstars">
                <div className="rockstar-component">
                    <img src={Image3} alt="rockstar-1" />
                    <div>
                        <p>
                            "I just made a Telegram group & kept sharing deals.
                            I get good income from orders that get placed"
                        </p>
                    </div>
                </div>
                <div className="rockstar-component">
                    <img src={Image4} alt="rockstar-2" />
                    <div>
                        <p>
                            "EarnKaro is the best source of pocket money for
                            students like me"
                        </p>
                    </div>
                </div>
            </div>
            <div className="affiliate-section">
                <div className="affiliate-text-1">Top Recommended</div>
                <div className="affiliate-text-2">Affiliate Programmes</div>
            </div>
        </div>
    );
};

export default Body;
