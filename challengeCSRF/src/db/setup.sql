CREATE TABLE Commentaires (
   id SERIAL NOT NULL CHECK (id >= 0),
   titre VARCHAR(500) NOT NULL,
   message VARCHAR(1000) NOT NULL,
   PRIMARY KEY(id)
);
