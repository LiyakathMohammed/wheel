import React, { useState, useEffect } from "react";

import { Button, PageLoader, NoData } from "neetoui";
import { Container, Header, Scrollable } from "neetoui/layouts";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { NOTES_SEED_VALUES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([{}]);

  useEffect(() => {
    setNotes([NOTES_SEED_VALUES]);
    setLoading(false);
  }, []);

  const { t } = useTranslation();

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        menuBarToggle={() => {}}
        title={t("header.title", { entity: "All Notes" })}
        actionBlock={
          <Button
            icon="ri-add-line"
            label={t("header.add", { entity: "Note" })}
            size="small"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          unlimitedChars: true,
          placeholder: t("header.search"),
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {notes.length ? (
        <Scrollable className="neeto-ui-bg-gray-100 w-full space-y-6 p-6">
          {notes.map(note => (
            <Card
              assignedContact={note.assignedContact}
              createdAt={note.createdAt}
              description={note.description}
              key={uuidv4()}
              setShowDeleteAlert={setShowDeleteAlert}
              tag={note.tag}
              title={note.title}
            />
          ))}
        </Scrollable>
      ) : (
        <div className="flex w-full items-center justify-center">
          <NoData
            title="There are no Notes to show"
            primaryButtonProps={{
              label: t("nodata.label"),
              icon: "ri-add-line",
              onClick: () => setShowNewNotePane(true),
            }}
          />
        </div>
      )}
      <NewNotePane
        notes={notes}
        setNotes={setNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      {showDeleteAlert && (
        <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
      )}
    </Container>
  );
};

export default Notes;
