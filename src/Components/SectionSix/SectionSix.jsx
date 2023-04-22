import React, { useState } from "react";
import "./SectionSix.css";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import data from "./projects.json";



function SectionSix() {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);
  return (
    <div className="sectionSix_container" id="section-six">
      <div className="sectionSix_navbar">
        <button
          className={"sectionSix_beforeBtnclick " + (btn1 && "btn_active")}
          onClick={() => {
            setBtn1(true);
            setBtn2(false);
            setBtn3(false);
            setBtn4(false);
            setBtn5(false);
          }}
        
        >
          # MERN
        </button>
        <button
          className={"sectionSix_beforeBtnclick " + (btn2 && "btn_active")}
          onClick={() => {
            setBtn1(false);
            setBtn2(true);
            setBtn3(false);
            setBtn4(false);
            setBtn5(false);
          }}
        >
          # REACT
        </button>
        <button
          className={"sectionSix_beforeBtnclick " + (btn3 && "btn_active")}
          onClick={() => {
            setBtn1(false);
            setBtn2(false);
            setBtn3(true);
            setBtn4(false);
            setBtn5(false);
          }}
        >
          # JSCRIPT
        </button>
        {/* <button
          className={"sectionSix_beforeBtnclick " + (btn4 && "btn_active")}
          onClick={() => {
            setBtn1(false);
            setBtn2(false);
            setBtn3(false);
            setBtn4(true);
            setBtn5(false);
          }}
        >
          remove
        </button> */}
        {/* <button
          className={"sectionSix_beforeBtnclick " + (btn5 && "btn_active")}
          onClick={() => {
            setBtn1(false);
            setBtn2(false);
            setBtn3(false);
            setBtn4(false);
            setBtn5(true);
          }}
        >
          #FIREBASE
        </button> */}
      </div>
      <div className="sectionSix_content">
        <Box
          className="sectionSix_contentSection sectionSix_contentSection_one"
          sx={{
            // border: "2px solid white",
            overflow:"hidden"
          }}
        >
          {btn1 ? (
            <>
              <Box
                sx={{
                  // border: "2px solid blue",
                  width: { xs: "100%", sm: "80%" },
                  height: "100%",
                  overflowY: "auto",
                  marginTop:"0vh"
                }}
                className="project-card-container"
              >
                {data.map((project) =>
                  project.mern.map((item) => (
                    <Box
                      className="project-card-holder"
                      sx={{
                        // border: "2px solid red",
                        width: "80%",
                        margin: "0 auto",
                        minHeight: "30vh",
                        marginBottom: "4vh",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        backgroundColor: "#100e1b",
                        borderRadius: "15px",
                        boxShadow:"1px 1px 8px white",
                        marginTop:"2vh"
                      }}
                      id={item.id}
                    >
                      <Box
                        className="project-card-holder-sec-one"
                        sx={{
                          // border: "2px solid white",
                          width: { xs: "90%", sm: "27%" },
                          minHeight: { xs: "20vh", sm: "25vh" },
                          marginTop: { xs: "2vh", sm: "0" },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius:"10px"
                        }}
                      >
                        <img
                          src={require('../../assets/images/projects/mern/' + item.image)}
                          className="project-card-image"
                          alt="Not found"
                        />
                      </Box>
                      <Box
                        className="project-card-holder-sec-two"
                        sx={{
                          // border: "2px solid white",
                          width: { xs: "100%", sm: "60%" },
                          minHeight: "22vh",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Box
                          sx={{
                            // border: "2px solid white",
                            width: "100%",
                            minHeight: "12vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginBottom: "1vh",
                          }}
                        >
                          <h2>{item.name}</h2>
                          <p>{item.description}</p>
                        </Box>

                        <Box
                          sx={{
                            // border: "2px solid white",
                            width: "100%",
                            minHeight: "7vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", sm: "flex-start" },
                            marginBottom:"2vh",
                          }}
                        >
                          <Button
                            startIcon={<GitHubIcon />}
                            variant="contained"
                            href={item.github} 
                            target="_blank"
                            sx={{
                              marginRight: "1vw",
                              backgroundColor: "#6e57e0",
                              fontSize: { xs: "10px", sm: "12px" },
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            GitHub
                          </Button>
                          <Button
                            startIcon={<LanguageIcon />}
                            variant="contained"
                            href={item.demo} 
                            target="_blank"
                            sx={{
                              marginRight: "1vw",
                              backgroundColor: "#6e57e0",
                              fontSize: { xs: "10px", sm: "12px" },
                            }}
                          >
                            Demo
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  ))
                )}
              </Box>
            </>
          ) : btn2 ? (
            <>
            <Box
              sx={{
                // border: "2px solid blue",
                width: { xs: "100%", sm: "80%" },
                height: "100%",
                overflowY: "auto",
                marginTop:"0vh"
              }}
              className="project-card-container"
            >
              {data.map((project) =>
                project.react.map((item) => (
                  <Box
                    className="project-card-holder"
                    id={item.id}
                    sx={{
                      // border: "2px solid red",
                      width: "80%",
                      margin: "0 auto",
                      minHeight: "30vh",
                      marginBottom: "4vh",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      backgroundColor: "#100e1b",
                      borderRadius: "15px",
                      boxShadow:"1px 1px 8px white",
                      marginTop:"2vh"
                    }}
                  >
                    <Box
                      className="project-card-holder-sec-one"
                      sx={{
                        // border: "2px solid white",
                        width: { xs: "90%", sm: "27%" },
                        minHeight: { xs: "20vh", sm: "25vh" },
                        marginTop: { xs: "2vh", sm: "0" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius:"10px"
                      }}
                    >
                      <img
                        src={require('../../assets/images/projects/reactjs/' + item.image)}
                        className="project-card-image"
                        alt="Not found"
                      />
                    </Box>
                    <Box
                      className="project-card-holder-sec-two"
                      sx={{
                        // border: "2px solid white",
                        width: { xs: "100%", sm: "60%" },
                        minHeight: "22vh",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Box
                        sx={{
                          // border: "2px solid white",
                          width: "100%",
                          minHeight: "12vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          marginBottom: "1vh",
                        }}
                      >
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                      </Box>

                      <Box
                        sx={{
                          // border: "2px solid white",
                          width: "100%",
                          minHeight: "7vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: { xs: "center", sm: "flex-start" },
                          marginBottom:"2vh",
                        }}
                      >
                        <Button
                          startIcon={<GitHubIcon />}
                          variant="contained"
                          href={item.github} 
                          target="_blank"
                          sx={{
                            marginRight: "1vw",
                            backgroundColor: "#6e57e0",
                            fontSize: { xs: "10px", sm: "12px" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          GitHub
                        </Button>
                        <Button
                          startIcon={<LanguageIcon />}
                          variant="contained"
                          href={item.demo} 
                          target="_blank"
                          sx={{
                            marginRight: "1vw",
                            backgroundColor: "#6e57e0",
                            fontSize: { xs: "10px", sm: "12px" },
                          }}
                        >
                          Demo
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          </>
          ) : btn3 ? (
            <>
            <Box
              sx={{
                // border: "2px solid blue",
                width: { xs: "100%", sm: "80%" },
                height: "100%",
                overflowY: "auto",
                marginTop:"0vh"
              }}
              className="project-card-container"
            >
              {data.map((project) =>
                project.jscript.map((item) => (
                  <Box
                    className="project-card-holder"
                    id={item.id}
                    sx={{
                      // border: "2px solid red",
                      width: "80%",
                      margin: "0 auto",
                      minHeight: "30vh",
                      marginBottom: "4vh",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      backgroundColor: "#100e1b",
                      borderRadius: "15px",
                      boxShadow:"1px 1px 8px white",
                      marginTop:"2vh"
                    }}
                  >
                    <Box
                      className="project-card-holder-sec-one"
                      sx={{
                        // border: "2px solid white",
                        width: { xs: "90%", sm: "27%" },
                        minHeight: { xs: "20vh", sm: "25vh" },
                        marginTop: { xs: "2vh", sm: "0" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius:"10px"
                      }}
                    >
                      <img
                        src={require('../../assets/images/projects/js/' + item.image)}
                        className="project-card-image"
                        alt="Not found"
                      />
                    </Box>
                    <Box
                      className="project-card-holder-sec-two"
                      sx={{
                        // border: "2px solid white",
                        width: { xs: "100%", sm: "60%" },
                        minHeight: "22vh",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Box
                        sx={{
                          // border: "2px solid white",
                          width: "100%",
                          minHeight: "12vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          marginBottom: "1vh",
                        }}
                      >
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                      </Box>

                      <Box
                        sx={{
                          // border: "2px solid white",
                          width: "100%",
                          minHeight: "7vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: { xs: "center", sm: "flex-start" },
                          marginBottom:"2vh",
                        }}
                      >
                        <Button
                          startIcon={<GitHubIcon />}
                          variant="contained"
                          href={item.github} 
                          target="_blank"
                          sx={{
                            marginRight: "1vw",
                            backgroundColor: "#6e57e0",
                            fontSize: { xs: "10px", sm: "12px" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          GitHub
                        </Button>
                        <Button
                          startIcon={<LanguageIcon />}
                          variant="contained"
                          href={item.demo} 
                          target="_blank"
                          sx={{
                            marginRight: "1vw",
                            backgroundColor: "#6e57e0",
                            fontSize: { xs: "10px", sm: "12px" },
                          }}
                        >
                          Demo
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          </>
          ) : btn4 ? (
            <>
              <Box
                sx={{
                  border: "2px solid blue",
                  width: { xs: "100%", sm: "80%" },
                  height: "100%",
                  overflowY: "auto",
                }}
                className="project-card-container"
              >
                {data.map((project) =>
                  project.mern.map((item) => (
                    <Box
                      className="project-card-holder"
                      sx={{
                        border: "2px solid red",
                        width: "80%",
                        margin: "0 auto",
                        minHeight: "35vh",
                        marginBottom: "3vh",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        backgroundColor: "#100e1b",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        className="project-card-holder-sec-one"
                        sx={{
                          border: "2px solid white",
                          width: { xs: "90%", sm: "27%" },
                          minHeight: { xs: "20vh", sm: "25vh" },
                          marginTop: { xs: "2vh", sm: "0" },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          // src={img2}
                          className="project-card-image"
                          alt="Not found"
                        />
                      </Box>
                      <Box
                        className="project-card-holder-sec-two"
                        sx={{
                          border: "2px solid white",
                          width: { xs: "100%", sm: "60%" },
                          minHeight: "22vh",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Box
                          sx={{
                            border: "2px solid white",
                            width: "100%",
                            minHeight: "12vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginBottom: "1vh",
                          }}
                        >
                          <h2>{item.name}</h2>
                          <p>{item.description}</p>
                        </Box>

                        <Box
                          sx={{
                            // border: "2px solid white",
                            width: "100%",
                            minHeight: "7vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", sm: "flex-start" },
                          }}
                        >
                          <Button
                            startIcon={<GitHubIcon />}
                            variant="contained"
                            href=""
                            sx={{
                              marginRight: "1vw",
                              backgroundColor: "#6e57e0",
                              fontSize: { xs: "10px", sm: "12px" },
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            GitHub
                          </Button>
                          <Button
                            startIcon={<LanguageIcon />}
                            variant="contained"
                            href=""
                            sx={{
                              marginRight: "1vw",
                              backgroundColor: "#6e57e0",
                              fontSize: { xs: "10px", sm: "12px" },
                            }}
                          >
                            Demo
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  ))
                )}
              </Box>
            </>
          ) : btn5 ? (
            <>
              <Box
                sx={{
                  // border: "2px solid blue",
                  width: { xs: "100%", sm: "80%" },
                  height: "100%",
                  overflowY: "auto",
                }}
                className="project-card-container"
              >
                {data.map((project) =>
                  project.mern.map((item) => (
                    <Box
                      className="project-card-holder"
                      sx={{
                        // border: "2px solid red",
                        width: "80%",
                        margin: "0 auto",
                        minHeight: "35vh",
                        marginBottom: "3vh",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        backgroundColor: "#100e1b",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        className="project-card-holder-sec-one"
                        sx={{
                          // border: "2px solid white",
                          width: { xs: "90%", sm: "27%" },
                          minHeight: { xs: "20vh", sm: "25vh" },
                          marginTop: { xs: "2vh", sm: "0" },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          // src={img2}
                          className="project-card-image"
                          alt="Not found"
                        />
                      </Box>
                      <Box
                        className="project-card-holder-sec-two"
                        sx={{
                          // border: "2px solid white",
                          width: { xs: "100%", sm: "60%" },
                          minHeight: "22vh",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Box
                          sx={{
                            // border: "2px solid white",
                            width: "100%",
                            minHeight: "12vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginBottom: "1vh",
                          }}
                        >
                          <h2>{item.name}</h2>
                          <p>{item.description}</p>
                        </Box>

                        <Box
                          sx={{
                            // border: "2px solid white",
                            width: "100%",
                            minHeight: "7vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", sm: "flex-start" },
                          }}
                        >
                          <Button
                            startIcon={<GitHubIcon />}
                            variant="contained"
                            href=""
                            sx={{
                              marginRight: "1vw",
                              backgroundColor: "#6e57e0",
                              fontSize: { xs: "10px", sm: "12px" },
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            GitHub
                          </Button>
                          <Button
                            startIcon={<LanguageIcon />}
                            variant="contained"
                            href=""
                            sx={{
                              marginRight: "1vw",
                              backgroundColor: "#6e57e0",
                              fontSize: { xs: "10px", sm: "12px" },
                            }}
                          >
                            Demo
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  ))
                )}
              </Box>
            </>
          ) : (
            ""
          )}
        </Box>
      </div>
    </div>
  );
}

export default SectionSix;
