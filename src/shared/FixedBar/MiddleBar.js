import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { AiFillCloseCircle } from "react-icons/ai";

import apoointDoctor from "../../assets/appointment doctor.jpg";
import healthScrenning from "../../assets/health Screnning.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function MiddleBar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="md:flex md:justify-center">
      <div className="flex justify-between md:justify-center backdrop-blur-3xl bg-white/30 md:rounded-xl">
        <Link
          to="/doctors"
          className="md:rounded-l-xl flex flex-col md:flex-row  gap-1 md:gap-2 px-4 py-2.5 md:px-8 md:py-5 hover:bg-white hover:md:bg-blue hover:md:text-white items-center duration-300 ease-linear cursor-pointer text-blue"
        >
          <SearchIcon sx={{ fontSize: "22px" }} />
          <p className="text-sm text-center flex gap-1 md:font-semibold">
            Find <span className="hidden md:block">Doctor</span>{" "}
          </p>
        </Link>
        <button
          onClick={handleClickOpen}
          className="flex flex-col md:flex-row  gap-1 md:gap-2 px-4 py-2.5 md:px-8 md:py-5 hover:bg-white hover:md:bg-blue hover:md:text-white items-center duration-300 ease-linear cursor-pointer text-blue"
        >
          <EventAvailableIcon sx={{ fontSize: "22px" }} />
          <p className="text-sm text-center flex gap-1 md:font-semibold">
            {" "}
            <span className="hidden md:block">Book</span> Appointment
          </p>
        </button>
        <Link
          to="/send-query"
          className="md:rounded-r-xl flex flex-col md:flex-row  gap-1 md:gap-2 px-4 py-2.5 md:px-8 md:py-5 hover:bg-white hover:md:bg-blue hover:md:text-white items-center duration-300 ease-linear cursor-pointer text-blue"
        >
          <HelpOutlineIcon sx={{ fontSize: "22px" }} />

          <p className="text-sm text-center flex gap-1 md:font-semibold">
            {" "}
            <span className="hidden md:block">Send</span> Query
          </p>
        </Link>
        <Link
          to="/my-profile"
          className="md:hidden flex flex-col md:flex-row  gap-1 md:gap-2 px-4 py-2.5 md:px-8 md:py-5 hover:bg-white items-center duration-300 ease-linear cursor-pointer text-blue md:text-white"
        >
          <PersonIcon sx={{ fontSize: "24px" }} />

          <p className="text-sm text-center flex gap-1">Account</p>
        </Link>
      </div>

      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className="relative">
            <div className="flex justify-between">
              <h5 className="font-semibold md:text-xl capitalize">
                Choose appointment type
              </h5>
              <button onClick={handleClose}>
                <AiFillCloseCircle className="text-2xl md:text-4xl text-red" />
              </button>
            </div>
            <div className="flex mt-5 gap-2">
              <div className="">
                <Link to="/check-up" className="relative">
                  <div className="absolute z-10 top-0 h-[100%] w-full bg-black/50 rounded-lg"></div>
                  <div className="absolute bottom-0 z-30 w-full bg-blue rounded-bl-lg rounded-br-lg">
                    <h2 className="text-white md:font-medium text-sm md:text-xl text-center p-1 md:py-3">
                      Health <br/> Screnning
                    </h2>
                  </div>

                  <LazyLoadImage
                    src={healthScrenning}
                    alt="Bumrungrad International Hospital"
                    srcset=""
                    effect="blur"
                    className="rounded-lg"
                  />
                </Link>
              </div>
              <div className="">
                <Link to="/appointment" className="relative">
                  <div className="absolute z-10 top-0 h-[100%] w-full bg-black/50 rounded-lg"></div>
                  <div className="absolute bottom-0 z-30 w-full bg-blue rounded-bl-lg rounded-br-lg">
                    <h2 className="text-white md:font-medium text-sm md:text-xl text-center p-1 md:py-3">
                      Doctor <br/> Schedule
                    </h2>
                  </div>
                  <LazyLoadImage
                    src={apoointDoctor}
                    effect="blur"
                    alt="Bumrungrad International Hospital"
                    srcset=""
                    className="rounded-lg"
                  />
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </section>
  );
}
