import React from "react";
import Trypical from "react-typical";
import "./profil.css"
export default function Profil() {
    return (
        <div className="profil-container">
            <div className="profil-parent">
                <div className="profil-details">
                    <div className="cloz">
                        <div className="cloz-icons">
                            <a href="#">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-github"></i>
                            </a>
                        </div>

                    </div>
                    <div className="profil-detail-name">
                        <span className="primary-text">
                            {""}
                            Salut !! Je suis <span className="highlighted-text">Mamadou</span>
                        </span>
                    </div>
                    <div className="profil-detail-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}

                                <Trypical
                                    loop={Infinity}
                                    steps={[
                                        "BioInformaticien🧬 ",
                                        1000,
                                        "Data Scientics 👨‍🔬 ",
                                        1000,
                                        "Cross Plateform 🌐",
                                        1000,
                                        "Flutter Dev 📱",
                                        1000,
                                        "Designer 💟",
                                        1000,
                                        "Laravel Dev",
                                        1000,
                                        "React js dev",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profil-detail-role-tagline">
                                Formule concise et frappante, utilisée par la publicité, la
                                propagande politique, etc.
                            </span>
                        </span>
                    </div>
                    <div className="profil-options">
                        <button className="btn btn-primary">
                            {""}
                            {"hide Me"}
                        </button>

                        <a href="cv2.pdf" download={"Mamadou_cisse_cv.pdf"}>
                            <button className="btn highlighted-btn ">
                                Télecharger le CV

                            </button>
                        </a>


                    </div>

                </div>
                <div className="profil-picture">
                    <div className="profil-picture-back">

                    </div>

                </div>
            </div>
           
        </div>

    );
}
