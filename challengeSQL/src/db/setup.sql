CREATE TABLE Administrateurs (
   identifiant VARCHAR(50) NOT NULL,
   mdp VARCHAR(100) NOT NULL,
   PRIMARY KEY(identifiant)
);

INSERT INTO Administrateurs (identifiant, mdp) VALUES ('admin', 'e140b8f9a3f6235f1cc8f44b3204126078a5228385b244433737de635f4c79c3');