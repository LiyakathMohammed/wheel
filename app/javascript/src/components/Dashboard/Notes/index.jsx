import React, { useState, useEffect } from "react";

import { Button, PageLoader, NoData } from "neetoui";
import { Container, Header, Scrollable } from "neetoui/layouts";

import notesApi from "apis/notes";

import Card from "./Card";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      // @ts-ignore
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        menuBarToggle={function noRefCheck() {}}
        title="Notes"
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add note"
            size="small"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          unlimitedChars: true,
          placeholder: "Search Name, Email, Phone Number",
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {notes.length ? (
        <Scrollable className="neeto-ui-bg-gray-100 w-full space-y-6 p-6">
          <Card created_at={new Date()} />
        </Scrollable>
      ) : (
        <div className="flex w-full items-center justify-center">
          <NoData
            title="There are no Notes to show"
            primaryButtonProps={{
              label: "Add new ticket",
              icon: "ri-add-line",
              onClick: () => setShowNewNotePane(true),
            }}
          />
        </div>
      )}
      <NewNotePane
        fetchNotes={fetchNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchNotes}
          selectedNoteIds={selectedNoteIds}
          setSelectedNoteIds={setSelectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Notes;
