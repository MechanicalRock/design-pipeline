import React from "react";

import {
  Delete,
  KeyboardVoice,
  PhotoCamera,
  Save,
  Send
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import {
  Box,
  Button,
  Divider,
  Fab,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({ display: "none" });

export default function Buttons() {
  return (
    <section id="buttons">
      <Typography variant="h2">Buttons</Typography>
      <Divider variant="middle" />
      <Typography variant="h3">Upload button</Typography>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button
            variant="contained"
            component="span"
          >
            Upload
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Stack>

      <Typography variant="h3">Floating Action Button</Typography>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="edit"
        >
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab
          disabled
          aria-label="like"
        >
          <FavoriteIcon />
        </Fab>
      </Box>
      <section>
        <Typography variant="h3">Contained Buttons</Typography>
        <Typography variant="body1">
          Contained buttons are high-emphasis, distinguished by their use of
          elevation and fill. They contain actions that are primary to your app.
        </Typography>
        <Stack
          direction="row"
          spacing={2}
        >
          <Button variant="contained">Contained</Button>
          <Button
            variant="contained"
            disabled
          >
            Disabled
          </Button>
          <Button
            variant="contained"
            href="#buttons"
          >
            Link
          </Button>
          <Button color="secondary">Secondary</Button>
          <Button
            variant="contained"
            color="success"
          >
            Success
          </Button>
          <Button
            variant="outlined"
            color="error"
          >
            Error
          </Button>
        </Stack>
      </section>
      <section>
        <Typography variant="h3">Text Buttons</Typography>
        <Typography variant="body1">
          Text buttons are typically used for less-pronounced actions, including
          those located:
        </Typography>
        <ul>
          <li>In dialogs</li>
          <li>In cards</li>
        </ul>
        <Typography variant="body1">
          In cards, text buttons help maintain an emphasis on card content.
        </Typography>
        <Stack
          direction="row"
          spacing={2}
        >
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>

        <Typography variant="h3">Outlined Buttons</Typography>
        <Stack
          direction="row"
          spacing={2}
        >
          <Button variant="outlined">Primary</Button>
          <Button
            variant="outlined"
            disabled
          >
            Disabled
          </Button>
          <Button
            variant="outlined"
            href="#outlined-buttons"
          >
            Link
          </Button>
        </Stack>
      </section>
      <section>
        <Typography variant="h3">Sizes</Typography>
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          <div>
            <Button
              variant="outlined"
              size="small"
            >
              Small
            </Button>
            <Button
              variant="outlined"
              size="medium"
            >
              Medium
            </Button>
            <Button
              variant="outlined"
              size="large"
            >
              Large
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              size="small"
            >
              Small
            </Button>
            <Button
              variant="contained"
              size="medium"
            >
              Medium
            </Button>
            <Button
              variant="contained"
              size="large"
            >
              Large
            </Button>
          </div>
        </Box>
      </section>
      <section>
        <Typography variant="h3">Buttons with icons and label</Typography>
        <Typography variant="body1">
          Sometimes you might want to have icons for certain button to enhance
          the UX of the application as we recognize logos more easily than plain
          text. For example, if you have a delete button you can label it with a
          dustbin icon.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
        >
          <Button
            variant="outlined"
            startIcon={<Delete />}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            endIcon={<Send />}
          >
            Send
          </Button>
          <Button
            variant="outlined"
            disabled
            startIcon={<KeyboardVoice />}
          >
            Talk
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<Save />}
          >
            Save
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<Save />}
          >
            Save
          </Button>
        </Stack>
      </section>
      <section>
        <Typography variant="h3">Icon Buttons</Typography>
        <Stack
          direction="row"
          spacing={1}
        >
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            disabled
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="add an alarm"
          >
            <AlarmIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
      </section>
    </section>
  );
}
