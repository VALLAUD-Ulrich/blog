begin; 

create domain email as text check (value ~* '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/');

create domain password as text check (value ~* '/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/');

create table if not exists roles (
    id serial primary key,
    label varchar(255) not null,
    created_at timestamptz
);

create table if not exists users (
    id serial primary key,
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    email email not null,
    password password not null,
    role_id int not null references roles(id) on delete cascade,
    created_at timestamptz
);
create table if not exists articles (
    id serial primary key,
    title varchar(255) not null,
    content text not null,
    users_id int not null references users(id) on delete cascade,
    created_at timestamptz
);
create table if not exists categories (
    id serial primary key,
    label varchar(255) not null,
    articles_id int not null references articles(id) on delete cascade,
    created_at timestamptz
);
create table if not exists articles_to_categories (
    id serial primary key,
    articles_id int not null references articles(id) on delete cascade,
    categories_id int not null references categories(id) on delete cascade,
    created_at timestamptz
);

create table if not exists comments (
    id serial primary key,
    articles_id int not null,
    users_id int not null,
    content text not null,
    created_at timestamptz
);

commit; 