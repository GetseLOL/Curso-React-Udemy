import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPages = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi et sunt
        fugit tenetur adipisci. Error, inventore? Iure quas expedita omnis
        consequatur consectetur. Provident odio libero incidunt quidem dolores
        quod similique!
      </Typography> */}
      <NothingSelectView />
      {/* <NoteView  /> */}
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {
            backgroundColor: "error.main",
            opacity: 0.9,
          },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined
          sx={{
            fontSize: 30,
          }}
        />
      </IconButton>
    </JournalLayout>
  );
};
