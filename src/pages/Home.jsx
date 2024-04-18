import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import LoginIcon from "@mui/icons-material/Login";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SummarizeIcon from "@mui/icons-material/Summarize";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TranslateIcon from "@mui/icons-material/Translate";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import ExploreIcon from "@mui/icons-material/Explore";
import { FaInstagram} from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { SiThreads } from "react-icons/si";
import { SiDiscord } from "react-icons/si";

const Home = () => {
  return (
    <>
      <Box
        height={"105vh"}
        sx={{
          backgroundImage:
            "url('https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-landing-main%20copy.webp&w=1080&q=75')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 64px",
          gap: "1rem",
        }}
      >
        <Box>
          <img
            style={{
              height: "180px",
            }}
            src="https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_logo.png&w=256&q=75"
            alt=""
          />
        </Box>

        <Box>
          <Typography variant="h3" fontWeight={"600"} color={"white"}>
            Film Industry Service Hub
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color={"white"}
            fontSize={"24px"}
            marginTop={"1rem"}
          >
            Helping bring the next masterpiece to the big screens.
          </Typography>
        </Box>
        <Stack direction={"row"} gap={"2rem"} marginTop={"3rem"}>
          <button
            style={{
              backgroundColor: "#1D6EE3",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "2rem",
              border: "none",
              padding: "0 1rem",
              fontFamily: "'Lexend Deca', 'Lexend Deca Fallback'",
              display: "flex",
              alignItems: "center",
              alignItems: "center",
              gap: "0.5rem",
              padding: "16px 18px",
              color: "white",
              fontWeight: "900",
              letterSpacing: "2px",
            }}
          >
            <CreateIcon />
            Get NolanAI Free
          </button>
          <button
            style={{
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "2rem",
              border: "none",
              padding: "0 1rem",
              fontFamily: "'Lexend Deca', 'Lexend Deca Fallback'",
              display: "flex",
              alignItems: "center",
              alignItems: "center",
              gap: "0.5rem",
              padding: "14px 18px",
              letterSpacing: "1px",
            }}
          >
            <LoginIcon />
            Log In
          </button>
        </Stack>
      </Box>

      <Box bgcolor={"#191b1f"}>
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          position={"relative"}
          bottom={"5rem"}
          gap={"1rem"}
          padding={"0 4rem"}
        >
          <Stack
            direction={"row"}
            padding={"40px 24px"}
            alignItems={"flex-start"}
            bgcolor={"#222429"}
            gap={"20px"}
            color={"white"}
            width={{ xs: "100%", lg: "33%" }}
            height={"208.8px"}
            borderRadius={"1rem"}
          >
            <IconButton
              sx={{
                padding: "12px",
                bgcolor: "#83c619",
                color: "white",
                height: "64px",
                width: "64px",
                borderRadius: "50%",
              }}
            >
              <AutoAwesomeIcon />
            </IconButton>
            <Box>
              <Typography variant="h5" fontWeight={"700"}>
                Editor with AI-Copilot
              </Typography>
              <Typography
                variant="subtitle1"
                margin={"14px 0"}
                fontSize={"14px"}
              >
                Enhance your screenwriting experience with AI Copilot, which
                suggests ideas for you.
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction={"row"}
            padding={" 40px 24px"}
            alignItems={"flex-start"}
            bgcolor={"#222429"}
            gap={"20px"}
            color={"white"}
            width={{ xs: "100%", lg: "33%" }}
            height={"208.8px"}
            borderRadius={"1rem"}
          >
            <IconButton
              sx={{
                padding: "12px",
                bgcolor: "#DA8813",
                color: "white",
                height: "64px",
                width: "64px",
                borderRadius: "50%",
              }}
            >
              <MovieFilterIcon />
            </IconButton>
            <Box>
              <Typography variant="h5">AI Deck Builder</Typography>
              <Typography variant="subtitle1" margin={"14px 0"}>
                Generate a film pitch deck within minutes.
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            padding={"40px 24px"}
            alignItems={"flex-start"}
            bgcolor={"#222429"}
            gap={"20px"}
            color={"white"}
            width={{ xs: "100%", lg: "33%" }}
            height={"208.8px"}
            borderRadius={"1rem"}
          >
            <IconButton
              sx={{
                padding: "12px",
                bgcolor: "#1D6EE3",
                color: "white",
                height: "64px",
                width: "64px",
                borderRadius: "50%",
              }}
            >
              <DeveloperBoardIcon />
            </IconButton>
            <Box>
              <Typography variant="h5">AI Storyboard</Typography>
              <Typography variant="subtitle1" margin={"14px 0"}>
                Automatically create shots by analyzing each scene within
                seconds. Generate shot images for inspiration.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box bgcolor={"#191b1f"} padding={"0rem 4rem 4rem 4rem"}>
        <Stack
          direction={{ md: "column", lg: "row" }}
          alignItems={"center"}
          gap={"3rem"}
        >
          <Box height={"50vh"} padding={"1rem"} marginLeft={"1rem"}>
            <img
              style={{ height: "100%" }}
              src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fshield.webp&w=828&q=75"
              alt=""
            />
          </Box>
          <Box
            color={"white"}
            padding={{ md: "32px 0px 32px 0", lg: "32px 96px 32px 0" }}
            textAlign={{ xs: "center", lg: "start" }}
          >
            <Typography variant="h3" fontWeight={"700"}>
              Secure
            </Typography>
            <Typography variant="h5" margin={"1rem 0"} fontWeight={"100"}>
              Don’t worry, your data is secure and encrypted with NOLAN
            </Typography>
            <Typography variant="body1" padding={"0.5rem 0"}>
              We take your privacy and the ownership of your work very
              seriously. We respect your creative content and have no rights
              over it. We do not use your work for training our models or for
              any other purposes without your explicit consent. Your scripts and
              content remain your intellectual property. So, when you
              create/upload or edit content using our software, you retain full
              ownership of the intellectual property. We do not claim any rights
              to your scripts or any other content you produce. Your creative
              work is yours and yours alone
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box
        // height={"85vh"}
        sx={{
          backgroundImage:
            "url('https://www.nolanai.app/images/hero-img-landing-vid%20copy.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        padding={"4rem"}
      >
        <Stack
          direction={{md: "column", lg: "row"}}
          gap={"4rem"}
          alignItems={"center"}
          height={"100%"}
        >
          <Box color={"white"}>
            <Typography
              fontSize={"32px"}
              fontWeight={"900"}
              margin={"0"}
              padding={"0"}
            >
              Free Script Writing Software
            </Typography>
            <Typography
              fontSize={"64px"}
              fontWeight={"900"}
              margin={"0.5rem 0"}
              textAlign={{xs: "center", lg: "start"}}
            >
              And More
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={"17px"}
              lineHeight={"2.5rem"}
            >
              NolanAI isn't just a screenwriting tool, it's a filmmaker's dream
              studio. From crafting your script with AI assistance to seamlessly
              pre-producing your masterpiece, all within one intuitive platform,
              NolanAI empowers you to tell your story without losing your
              creative spark.
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={"17px"}
              lineHeight={"2.5rem"}
            >
              Imagine ditching siloed tools and having everything at your
              fingertips, from storyboards to shot lists, all fueled by AI
              smarts and user-friendly design. That's the NolanAI advantage -
              streamlined storytelling, from pen to production, with your unique
              voice always in the director's chair.
            </Typography>

            <button
              style={{
                backgroundColor: "#1D6EE3",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "2rem",
                border: "none",
                padding: "0 1rem",
                fontFamily: "'Lexend Deca', 'Lexend Deca Fallback'",
                display: "flex",
                alignItems: "center",
                alignItems: "center",
                gap: "0.5rem",
                padding: "16px 18px",
                color: "white",
                fontWeight: "900",
                letterSpacing: "2px",
                marginTop: "1.5rem",
              }}
            >
              Explore our premium plan!
              <ArrowForwardIcon />
            </button>
          </Box>
          <Box width={"100%"} height={"100%"}>
            <img
              style={{
                // width: "559.45px",
                height: "100%",
                width: "100%",
              }}
              src="https://www.nolanai.app/_next/image?url=%2Fimages%2FdashboardBanner.webp&w=828&q=75"
              alt=""
            />
          </Box>
        </Stack>
      </Box>

      <Box bgcolor={"#191b1f"} padding={"4rem"}>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography fontSize={"44px"} fontWeight={"600"} color={"#fffffff5"}>
            Testimonials
          </Typography>
          <Typography
            fontSize={"28px"}
            color={"#ffffff70"}
            margin={"0.5rem 0 1.5rem 0"}
          >
            What Our Customers Say
          </Typography>
          <Stack
            alignItems={"center"}
            padding={"24px"}
            color={"white"}
            width={"33rem"}
            bgcolor={"#2B2D33"}
            borderRadius={"14px"}
          >
            <img
              height={"70px"}
              width={"70px"}
              style={{
                borderRadius: "50%",
                margin: "10px",
                objectFit: "cover",
              }}
              src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fcustomers%2Fmike_wech.jpeg&w=128&q=75"
              alt=""
            />
            <Typography variant="h5">Mike Wech</Typography>
            <Typography variant="subtitle1" color={"#ffffff70"}>
              PRODUCER • EDITOR • WRITER
            </Typography>
            <Typography
              fontSize={"1.1rem"}
              margin={"1rem 0"}
              lineHeight={"1.8rem"}
            >
              NolanAI has the ability to be a game changer for producers. What
              used to take days could soon take hours and the technology is
              constantly improving. I was happy that the developers were quick
              to address the issues and eager to learn how the program can
              become more efficient for producers. The incorporated new features
              that we asked for and are eager to help filmmakers streamline
              production. Highly recommended.
            </Typography>
            <img
              height={"32px"}
              src="https://www.nolanai.app/_next/image?url=%2Fimages%2Ficons%2Fimdb.png&w=64&q=75"
              alt=""
            />
          </Stack>
        </Stack>
      </Box>

      <Box bgcolor={"#191b1f"} padding={"4rem"} color={"#fffffff5"}>
        <Typography
          variant="h3"
          color={"#fffffff5"}
          textAlign={"center"}
          fontWeight={"1000"}
        >
          Meet Your Fellow Creators at NolanAI
        </Typography>
        <Typography
          fontSize={"24px"}
          textAlign={"center"}
          color={"#ffffff70"}
          margin={"1rem 0"}
        >
          Fueling the Creative Fire: Where Thousands Shape Their Stories
        </Typography>
        <Stack direction={"row"} marginTop={"64px"}>
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1.5rem 0",
              borderRadius: "1rem",
              width: "33%",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "4rem",
                width: "4rem",
                border: "5px solid #ffffff35",
                backgroundColor: "#ffffff15",
                borderRadius: "50%",
              }}
            >
              <SupervisorAccountIcon sx={{ height: "2rem", width: "2rem" }} />
            </span>
            <Typography
              variant="h1"
              margin={"1rem 0"}
              color={"#E4931D"}
              fontWeight={"1000"}
              fontSize={"4rem"}
            >
              +10000
            </Typography>
            <Typography variant="h5" fontSize={"2rem"}>
              Registered users
            </Typography>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1.5rem 0",
              borderRadius: "1rem",
              width: "33%",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "4rem",
                width: "4rem",
                border: "5px solid #ffffff35",
                backgroundColor: "#ffffff15",
                borderRadius: "50%",
              }}
            >
              <DeveloperBoardIcon sx={{ height: "2rem", width: "2rem" }} />
            </span>
            <Typography
              variant="h1"
              margin={"1rem 0"}
              color={"#E4931D"}
              fontWeight={"1000"}
              fontSize={"4rem"}
            >
              +3000
            </Typography>
            <Typography variant="h5" fontSize={"2rem"}>
              Storyboards created
            </Typography>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1.5rem 0",
              borderRadius: "1rem",
              width: "33%",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "4rem",
                width: "4rem",
                border: "5px solid #ffffff35",
                backgroundColor: "#ffffff15",
                borderRadius: "50%",
              }}
            >
              <SummarizeIcon sx={{ height: "2rem", width: "2rem" }} />
            </span>
            <Typography
              variant="h1"
              margin={"1rem 0"}
              color={"#E4931D"}
              fontWeight={"1000"}
              fontSize={"4rem"}
            >
              +18000
            </Typography>
            <Typography variant="h5" fontSize={"2rem"}>
              Scripts written
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box
        padding={"4rem"}
        bgcolor={"#191b1f"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          color={"#fffffff5"}
          textAlign={"center"}
          fontWeight={"1000"}
        >
          FEATURES
        </Typography>
        <Typography
          fontSize={"24px"}
          textAlign={"center"}
          color={"#ffffff70"}
          margin={"1rem 0"}
        >
          Explore what the NolanAI platform can do
        </Typography>

        <Stack direction={"row"} gap={"3rem"} padding={"4rem"}>
          <Stack alignItems={"end"} width={"50%"} color={"#fffffff5"}>
            <IconButton
              sx={{
                height: "4rem",
                width: "4rem",
                background: "#1364d9",
                borderRadius: "50%",
                padding: "12px",
                color: "#fffffff5",
              }}
            >
              <DriveFileRenameOutlineIcon
                sx={{ height: "2rem", width: "2rem" }}
              />
            </IconButton>
            <Typography
              textAlign={"end"}
              variant=""
              fontSize={"40px"}
              fontWeight={"800"}
              marginTop={"2rem"}
              al
            >
              THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE
            </Typography>
            <Typography
              textAlign={"end"}
              fontSize={"16px"}
              margin={"1rem 0"}
              lineHeight={"1.5rem"}
            >
              Nolan provides a user-friendly interface, advanced formatting
              options, and helpful features such as character and scene
              breakdowns, revision tracking, and collaboration tools.With its
              powerful tools and intuitive design.
            </Typography>
          </Stack>
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2FnewFeatures%2F1.webp&w=640&q=75"
            alt=""
            width={"50%"}
            height={"100%"}
          />
        </Stack>
        <Stack direction={"row"} gap={"3rem"} padding={"4rem"}>
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F2KJT6fOlU1rZNZDtpb66TA&w=640&q=75"
            alt=""
            width={"50%"}
            height={"100%"}
          />
          <Stack alignItems={"start"} width={"50%"} color={"#fffffff5"}>
            <IconButton
              sx={{
                height: "4rem",
                width: "4rem",
                background: "#B11E46",
                borderRadius: "50%",
                padding: "12px",
                color: "#fffffff5",
              }}
            >
              <NewspaperIcon sx={{ height: "2rem", width: "2rem" }} />
            </IconButton>
            <Typography
              textAlign={"start"}
              variant=""
              fontSize={"40px"}
              fontWeight={"800"}
              marginTop={"2rem"}
              al
            >
              AI SCRIPT COVERAGE REPORTING
            </Typography>
            <Typography
              textAlign={"start"}
              fontSize={"16px"}
              margin={"1rem 0"}
              lineHeight={"1.5rem"}
            >
              NolanAI's Script Coverage feature is like having a super-efficient
              assistant that can save you a ton of time and money. With just a
              few clicks, you'll receive a detailed script report covering all
              the essential aspects.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={"3rem"} padding={"4rem"}>
          <Stack alignItems={"end"} width={"50%"} color={"#fffffff5"}>
            <IconButton
              sx={{
                height: "4rem",
                width: "4rem",
                background: "#1364d9",
                borderRadius: "50%",
                padding: "12px",
                color: "#fffffff5",
              }}
            >
              <ListAltIcon sx={{ height: "2rem", width: "2rem" }} />
            </IconButton>
            <Typography
              textAlign={"end"}
              variant=""
              fontSize={"40px"}
              fontWeight={"800"}
              marginTop={"2rem"}
              al
            >
              AUTOMATIC SCREENPLAY BREAKDOWN
            </Typography>
            <Typography
              textAlign={"end"}
              fontSize={"16px"}
              margin={"1rem 0"}
              lineHeight={"1.5rem"}
            >
              The Automatic Screenplay Breakdown (Break Smart) is a time-saving
              solution that simplifies the process of deconstructing a
              screenplay. It automatically dissects your script into key
              elements like scenes, characters, and locations, providing a clear
              and organized overview of your story's structure.
            </Typography>
          </Stack>
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2FnewFeatures%2FscriptBreakdown.webp&w=640&q=75"
            alt=""
            width={"50%"}
            height={"100%"}
          />
        </Stack>
        <Stack direction={"row"} gap={"3rem"} padding={"4rem"}>
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2FnewFeatures%2F3.webp&w=640&q=75"
            alt=""
            width={"50%"}
            height={"100%"}
          />
          <Stack alignItems={"start"} width={"50%"} color={"#fffffff5"}>
            <IconButton
              sx={{
                height: "4rem",
                width: "4rem",
                background: "#DA8813",
                borderRadius: "50%",
                padding: "12px",
                color: "#fffffff5",
              }}
            >
              <LightbulbIcon sx={{ height: "2rem", width: "2rem" }} />
            </IconButton>
            <Typography
              textAlign={"start"}
              variant=""
              fontSize={"40px"}
              fontWeight={"800"}
              marginTop={"2rem"}
              al
            >
              ASK NOLAN FOR SUGGESTION
            </Typography>
            <Typography
              textAlign={"start"}
              fontSize={"16px"}
              margin={"1rem 0"}
              lineHeight={"1.5rem"}
            >
              To help you create high-quality story, Nolan offers a powerful
              editing feature. With Ask Nolan, you can easily enhance the
              quality of your text by highlighting the selected text,correcting
              any spelling and grammar errors, and adjusting the tone of the
              paragraph as necessary.This feature provides you with the
              flexibility to customize your text and make it more engaging and
              effective.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={"3rem"} padding={"4rem"}>
          <Stack alignItems={"end"} width={"50%"} color={"#fffffff5"}>
            <IconButton
              sx={{
                height: "4rem",
                width: "4rem",
                background: "#83C619",
                borderRadius: "50%",
                padding: "12px",
                color: "#fffffff5",
              }}
            >
              <TranslateIcon sx={{ height: "2rem", width: "2rem" }} />
            </IconButton>
            <Typography
              textAlign={"end"}
              variant=""
              fontSize={"40px"}
              fontWeight={"800"}
              marginTop={"2rem"}
              al
            >
              CHANGE YOUR CHARACTER ACCENT
            </Typography>
            <Typography
              textAlign={"end"}
              fontSize={"16px"}
              margin={"1rem 0"}
              lineHeight={"1.5rem"}
            >
              Personalize your character and make it truly unique. "Change
              Accent" allows you to change your character's accent, making it
              sound more distinct and authentic. Whether you want to add a touch
              of personality to your character or create a character that stands
              out, this feature provides you with the flexibility to customize
              your character's accent to match your preferences. With this
              feature, you can create a character that truly represents you and
              brings your story to life.
            </Typography>
          </Stack>
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2FnewFeatures%2F4.webp&w=640&q=75"
            alt=""
            width={"50%"}
            height={"100%"}
          />
        </Stack>
        <Stack direction={"row"} gap={"3rem"} padding={"4rem"}>
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2FnewFeatures%2F5.webp&w=640&q=75"
            alt=""
            width={"50%"}
            height={"100%"}
          />
          <Stack alignItems={"start"} width={"50%"} color={"#fffffff5"}>
            <IconButton
              sx={{
                height: "4rem",
                width: "4rem",
                background: "#D54927",
                borderRadius: "50%",
                padding: "12px",
                color: "#fffffff5",
              }}
            >
              <FormatAlignCenterIcon sx={{ height: "2rem", width: "2rem" }} />
            </IconButton>
            <Typography
              textAlign={"start"}
              variant=""
              fontSize={"40px"}
              fontWeight={"800"}
              marginTop={"2rem"}
              al
            >
              SCRIPT SMART
            </Typography>
            <Typography
              textAlign={"start"}
              fontSize={"16px"}
              margin={"1rem 0"}
              lineHeight={"1.5rem"}
            >
              Script Smart uses advanced algorithms to automatically format your
              text into a screenplay format. With Script Smart, you can save
              time and focus on writing by letting the software handle the
              formatting for you. This feature also provides suggestions and
              corrections to help ensure that your screenplay adheres toindustry
              standards and is formatted correctly.
            </Typography>
          </Stack>
        </Stack>

        <button
          style={{
            backgroundColor: "#1D6EE3",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "2rem",
            border: "none",
            padding: "0 1rem",
            fontFamily: "'Lexend Deca', 'Lexend Deca Fallback'",
            display: "flex",
            alignItems: "center",
            alignItems: "center",
            gap: "1rem",
            padding: "16px 18px",
            color: "white",
            fontWeight: "900",
            letterSpacing: "2px",
            marginTop: "1.5rem",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <ExploreIcon />
          Explore All features
        </button>
      </Box>

      <Box padding={"2rem 4rem 4rem 4rem"} bgcolor={"#191b1f"}>
        <Stack direction={"row"} color={"#fffffff5"} alignItems={"center"}>
          <Stack width={"33%"}>
            <img
              style={{
                height: "40px",
                width: "15%",
              }}
              src="https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_logo.png&w=256&q=75"
              alt=""
            />
          </Stack>
          <Stack width={"33%"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="">© NolanAI, Inc. 2024</Typography>
            <Typography marginTop={"5px"} textAlign={"center"}>
              Privacy Policy | Terms of Service | Referral
              <br />
              Program | Releases | Help
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            width={"33%"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={"1rem"}
            fontSize={"32px"}
          >
            <span style={{}}>
              <Link to={"#"}>
                <FaInstagram color={"#ffffff70"} />
              </Link>
            </span>
            <span>
              <Link to={"#"}>
                <RiTwitterXLine color={"#ffffff70"} />
              </Link>
            </span>
            <span>
              <Link to={"#"}>
                <SlSocialYoutube color={"#ffffff70"} />
              </Link>
            </span>
            <span>
              <Link to={"#"}>
                <SiThreads color={"#ffffff70"} fontSize={"25px"} />
              </Link>
            </span>
            <span>
              <Link to={"#"}>
                <SiDiscord color={"#ffffff70"} fontSize={"27px"} />
              </Link>
            </span>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
