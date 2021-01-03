import React from "react"
import heroStyles from "../styles/hero.module.scss"
import Particles from "react-particles-js"

const Hero = () => {
  return (
    <section className={heroStyles.hero}>
      <Particles
        params={{
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "detectsOn": "canvas",
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 4
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "slow": {
                "factor": 1,
                "radius": 0
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": {
                "value": "#000"
              },
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "shadow": {
                "blur": 5,
                "color": {
                  "value": "lime"
                },
                "enable": false
              },
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "collisions": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false,
              "trail": {
                "enable": false,
                "length": 10,
                "fillColor": {
                  "value": "#000000"
                }
              }
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 0,
              "value": 10
            },
            "opacity": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 1,
                "sync": false
              },
              "random": {
                "enable": false,
                "minimumValue": 1
              },
              "value": 0.5
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400",
                "close": true
              },
              "image": [
                {
                  "height": 32,
                  "src": "https://kingwebsolutions.onrender.com/heart.svg",
                  "width": 32,
                  "fill": true,
                  "close": true
                },
                {
                  "height": 32,
                  "src": "https://kingwebsolutions.onrender.com/pencil.svg",
                  "width": 32,
                  "fill": true,
                  "close": true
                },
                {
                  "height": 32,
                  "src": "https://kingwebsolutions.onrender.com/mobile.svg",
                  "width": 32,
                  "fill": true,
                  "close": true
                },
                {
                  "height": 32,
                  "src": "https://kingwebsolutions.onrender.com/wordpress.svg",
                  "width": 32,
                  "fill": true,
                  "close": true
                },
                {
                  "height": 32,
                  "src": "https://kingwebsolutions.onrender.com/compass.svg",
                  "width": 32,
                  "fill": true,
                  "close": true
                },
                {
                  "height": 32,
                  "src": "https://kingwebsolutions.onrender.com/chrome.svg",
                  "width": 32,
                  "fill": true,
                  "close": true
                },
              ],
              "polygon": {
                "close": true,
                "fill": true,
                "sides": 5
              },
              "type": "image",
              "custom": {}
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": {
                "enable": false,
                "minimumValue": 1
              },
              "value": 16
            },
            "shadow": {
              "blur": 0,
              "color": {
                "value": "#000000"
              },
              "enable": false,
              "offset": {
                "x": 0,
                "y": 0
              }
            },
            "stroke": {
              "color": {
                "value": "#000000"
              },
              "width": 0,
              "opacity": 1
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "stroke": {
                "color": {
                  "value": "#ffffff"
                },
                "width": 0.5,
                "opacity": null
              }
            },
            "enable": false,
            "inline": {
              "arrangement": "one-per-point"
            },
            "move": {
              "radius": 10,
              "type": "path"
            },
            "scale": 1,
            "type": "none",
            "url": ""
          },
          "backgroundMask": {
            "cover": {
              "color": {
                "value": "#fff"
              },
              "opacity": 1
            },
            "enable": false
          },
          "pauseOnBlur": true,
          "background": {}
        }} />

      <div className={heroStyles.heroContainer}>
        <div className={heroStyles.heroText}>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease"
          >
          <h2>Hello! Need a website?</h2>
          <p>
            I'm a freelance web developer with a focus
            on creating value for my clients.
          </p>
          </div>
        </div>

        <div>
          <a href="#services" className={heroStyles.arrow}>
            <svg width="28" height="16" viewBox="0 0 28 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.745.568L14 12.75 26.214.57l1.536 1.48L14 15.8.25 2.05" fillRule="nonzero" fill="#FFF" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
