begin;

Insert into roles (label) values 
('admin'),
('user');

Insert into users (firstname, lastname, email, password, role_id) values 
('ulrich', 'vallaud', 'ulrichvallaud@gmail.com','Ayden05052015',1),
('marjorie', 'hameon', 'marjoriehameon@hotmail.fr','Wyatt19032020',2);

Insert into articles (title, content, users_id) values 
('Le premier article', 'Ceci est le premier article', 1);

Insert into categories (label) values 
('Informatique');

Insert into articles_to_categories (articles_id, categories_id) values 
(1, 1);

Insert into comments (articles_id, users_id, content) values 
(1, 2, 'Ceci est un commentaire');

commit;
