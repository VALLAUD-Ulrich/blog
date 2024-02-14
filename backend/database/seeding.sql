begin;

Insert into roles (label, created_at) values 
('admin', now()),
('user', now());

Insert into users (firstname, lastname, email, password, role_id, created_at) values 
('ulrich', 'vallaud', 'ulrichvallaud@gmail.com','Ayden05052015',1, now()),
('marjorie', 'hameon', 'marjoriehameon@hotmail.fr','Wyatt19032020',2,now());

Insert into articles (title, content, users_id, created_at) values 
('Le premier article', 'Ceci est le premier article', 1, now());

Insert into categories (label, articles_id, created_at) values 
('Informatique', 1, now());

Insert into articles_to_categories (articles_id, categories_id, created_at) values 
(1, 1, now());

Insert into comments (articles_id, users_id, content, created_at) values 
(1, 2, 'Ceci est un commentaire', now());

commit;
