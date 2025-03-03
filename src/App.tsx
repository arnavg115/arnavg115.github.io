import "./App.css";
import DotMatrix from "./components/DotMatrix";
import { Nav } from "./components/Nav";
import { Box } from "./components/Box";

function App() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-3 h-1/2">
        <DotMatrix />
        <Nav />
        <Box>
          <h1 className="text-3xl">About</h1>
          <div className="font-mono text-blue-100 mt-5 pl-10">
            <ul className="list-disc">
              <li>Bioinfo major, CSE minor @ UCSD</li>
              <li>
                Transit enthusiast: Did BART speed run (visited all 50 stations
                in 6:30)
              </li>
              <li>Cycle, Run from time to time</li>
              <li>
                90% software (
                <a
                  href="https://battlecode.org/"
                  target="_blank"
                  className="text-blue-400"
                >
                  battlecode
                </a>{" "}
                '24-'25, lab work, personal projects,{" "}
                <a
                  href="https://calico.cs.berkeley.edu/"
                  className="text-blue-400"
                  target="_blank"
                >
                  Calico
                </a>
                )
              </li>
              <li>10% hardware (ucsd micromouse team lead)</li>
              <li>
                Research Assistant @{" "}
                <a
                  href="https://cseweb.ucsd.edu/~haosu/index.html"
                  className="text-blue-400"
                  target="_blank"
                >
                  Hao Su Lab
                </a>{" "}
                since Dec 2023
              </li>
              <li>
                Research Assistant @{" "}
                <a
                  href="https://www.teleselab.com/"
                  className="text-blue-400"
                  target="_blank"
                >
                  Telese Lab
                </a>{" "}
                since Dec 2024
              </li>
            </ul>
          </div>
        </Box>
        <Box>
          <h1 className="text-3xl">Cool Stuff I've worked on</h1>
          <div className="font-mono text-blue-100 mt-5 pl-10">
            <ul className="list-disc">
              <li>
                <a
                  href="https://github.com/arnavg115/agrad"
                  target="_blank"
                  className="text-blue-400"
                >
                  Agrad
                </a>
                : Homecooked AutoGrad library (Built PyTorch from scratch)
                <ul className="list-inside p-2">
                  <li>
                    <a
                      href="https://github.com/arnavg115/basic_rl"
                      target="_blank"
                      className="text-blue-400"
                    >
                      basic_rl
                    </a>
                    : RL from the basics written w/ Agrad
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://github.com/haosulab/ManiSkill"
                  target="_blank"
                  className="text-blue-400"
                >
                  ManiSkill
                </a>
                : Parallelized Robotics Simulation suite
              </li>
              <li>
                <a
                  href="https://huggingface.co/Gorilla115/t5-shakespearify-lite"
                  target="_blank"
                  className="text-blue-400"
                >
                  Shakespearify
                </a>
                : LM converting modern english to old english
              </li>
              <li>
                <a
                  href="https://github.com/arnavg115/bad-apple-google-calendar"
                  target="_blank"
                  className="text-blue-400"
                >
                  Bad Apple google calendar
                </a>
                : Link to{" "}
                <a
                  href="https://www.youtube.com/watch?v=YulFifQifr4"
                  target="_blank"
                  className="text-blue-400"
                >
                  video
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arnavg115/nl_evo"
                  target="_blank"
                  className="text-blue-400"
                >
                  nl_evo
                </a>
                : Performing optimization using RL, gradient descent, and
                genetic algorithms on neural circuits.
              </li>
            </ul>
          </div>
        </Box>
        <Box>
          <h1 className="text-3xl">Question</h1>
          <div className="font-mono text-blue-100 mt-5 pl-5">
            <p>
              (Dis)prove: Given a plane of arbitrary size and n dots that can be
              placed on this plane, a line of symmetry can be defined such that
              on each side of the line an equal number of dots rest (including
              colinear points). This line doesn't necessarily need to divide the
              plane into two, it just needs to have an equal number of dots on
              either side. Can it be (dis)proven that such a line that passes{" "}
              <span className="text-blue-400">through at least one dot </span>
              exists for every n.
            </p>

            <div className="mt-10">
              Email proofs to agurha@ucsd.edu. First to do so wins $10{" "}
              <span className="text-blue-400">
                Credit to H. I. for variation{" "}
              </span>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
