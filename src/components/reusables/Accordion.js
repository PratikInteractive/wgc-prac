"use client";
import { useState } from "react";
import { List, ListItem, ListItemText, Collapse, IconButton } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import "@/styles/_accordion.scss";

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-sm-padding">
      <div className="container">
        <div className="accordion">

            <List
              component="nav"
              aria-labelledby="nested-list-subheader">
              {data.map((item, index) => (
                <div key={index}>
                  <ListItem
                    button
                    onClick={() => handleClick(index)}>
                    <h3 className="accordion_title">{item.title}</h3>
                    <IconButton>{openIndex === index ? <RemoveRoundedIcon /> : <AddRoundedIcon />}</IconButton>
                  </ListItem>
                  <Collapse
                    in={openIndex === index}
                    timeout="auto"
                    unmountOnExit>
                    <List
                      component="div"
                      disablePadding
                      className="accordion_data">
                      <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    </List>
                  </Collapse>
                </div>
              ))}
            </List>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
